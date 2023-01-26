import { useState } from 'react'
import { escapeRegExp } from 'utils'
import { Text, Button, Input, Flex, Box, QuestionHelper, Toggle } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useUserSlippageTolerance, useUserTransactionTTL, useAudioModeManager } from 'state/user/hooks'

enum SlippageError {
  InvalidInput = 'InvalidInput',
  RiskyLow = 'RiskyLow',
  RiskyHigh = 'RiskyHigh',
}

enum DeadlineError {
  InvalidInput = 'InvalidInput',
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
const THREE_DAYS_IN_SECONDS = 60 * 60 * 24 * 3

const SlippageTabs = () => {
  const [userSlippageTolerance, setUserSlippageTolerance] = useUserSlippageTolerance()
  const [ttl, setTtl] = useUserTransactionTTL()
  const [slippageInput, setSlippageInput] = useState('')
  const [deadlineInput, setDeadlineInput] = useState('')
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  const { t } = useTranslation()

  const slippageInputIsValid =
    slippageInput === '' || (userSlippageTolerance / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2)
  const deadlineInputIsValid = deadlineInput === '' || (ttl / 60).toString() === deadlineInput

  let slippageError: SlippageError | undefined
  if (slippageInput !== '' && !slippageInputIsValid) {
    slippageError = SlippageError.InvalidInput
  } else if (slippageInputIsValid && userSlippageTolerance < 50) {
    slippageError = SlippageError.RiskyLow
  } else if (slippageInputIsValid && userSlippageTolerance > 500) {
    slippageError = SlippageError.RiskyHigh
  } else {
    slippageError = undefined
  }

  let deadlineError: DeadlineError | undefined
  if (deadlineInput !== '' && !deadlineInputIsValid) {
    deadlineError = DeadlineError.InvalidInput
  } else {
    deadlineError = undefined
  }

  const parseCustomSlippage = (value: string) => {
    if (value === '' || inputRegex.test(escapeRegExp(value))) {
      setSlippageInput(value)

      try {
        const valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString())
        if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
          setUserSlippageTolerance(valueAsIntFromRoundedFloat)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const parseCustomDeadline = (value: string) => {
    setDeadlineInput(value)

    try {
      const valueAsInt: number = Number.parseInt(value) * 60
      if (!Number.isNaN(valueAsInt) && valueAsInt > 60 && valueAsInt < THREE_DAYS_IN_SECONDS) {
        setTtl(valueAsInt)
      } else {
        deadlineError = DeadlineError.InvalidInput
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" mb="24px">
        <Flex mb="12px">
          <Text>{t('Slippage Tolerance')}</Text>
          <QuestionHelper
            text={t(
              'Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.',
            )}
            placement="top-start"
            ml="4px"
          />
        </Flex>
        <Flex flexWrap="wrap">
          <Button
            mt="4px"
            mr="18px"
            height="50px"
            width="80px"
            scale="sm"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(10)
            }}
            variant={userSlippageTolerance === 10 ? 'primary' : 'tertiary'}
          >
            0.1%
          </Button>
          <Button
            mt="4px"
            mr="18px"
            height="50px"
            width="80px"
            scale="sm"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(50)
            }}
            variant={userSlippageTolerance === 50 ? 'primary' : 'tertiary'}
          >
            0.5%
          </Button>
          <Button
            mt="4px"
            mr="18px"
            height="50px"
            width="80px"
            scale="sm"
            onClick={() => {
              setSlippageInput('')
              setUserSlippageTolerance(100)
            }}
            variant={userSlippageTolerance === 100 ? 'primary' : 'tertiary'}
          >
            1.0%
          </Button>
          <Flex alignItems="center">
            <Box width="227px" mt="4px">
              <Input
                scale="sm"
                inputMode="decimal"
                pattern="^[0-9]*[.,]?[0-9]{0,2}$"
                placeholder={(userSlippageTolerance / 100).toFixed(2)}
                value={slippageInput}
                onBlur={() => {
                  parseCustomSlippage((userSlippageTolerance / 100).toFixed(2))
                }}
                onChange={(event) => {
                  if (event.currentTarget.validity.valid) {
                    parseCustomSlippage(event.target.value.replace(/,/g, '.'))
                  }
                }}
                isWarning={!slippageInputIsValid}
                isSuccess={![10, 50, 100].includes(userSlippageTolerance)}
              />
            </Box>
            <Text ml="15px">%</Text>
          </Flex>
        </Flex>
        {!!slippageError && (
          <Text fontSize="14px" color={slippageError === SlippageError.InvalidInput ? 'red' : '#F3841E'} mt="8px">
            {slippageError === SlippageError.InvalidInput
              ? t('Enter a valid slippage percentage')
              : slippageError === SlippageError.RiskyLow
              ? t('Your transaction may fail')
              : t('Your transaction may be frontrun')}
          </Text>
        )}
      </Flex>
      <Flex justifyContent="space-between" flexWrap="wrap" alignItems="center" mb="10px">
        <Flex justifyContent="space-between" flexDirection="column">
          <Flex alignItems="center">
            <Text>{t('Transaction Deadline')}</Text>
            <QuestionHelper
              color="primary"
              text={t('Your transaction will revert if it is left confirming for longer than this time.')}
              placement="top-start"
              ml="4px"
            />
          </Flex>
          <Flex justifyContent="space-between" flexDirection="row" alignItems="center">
            <Box width="220px" mt="4px">
              <Input
                scale="sm"
                inputMode="numeric"
                pattern="^[0-9]+$"
                isWarning={!!deadlineError}
                onBlur={() => {
                  parseCustomDeadline((ttl / 60).toString())
                }}
                placeholder={(ttl / 60).toString()}
                value={deadlineInput}
                onChange={(event) => {
                  if (event.currentTarget.validity.valid) {
                    parseCustomDeadline(event.target.value)
                  }
                }}
              />
            </Box>
            <Text ml="20px">{t('Minutes')}</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" flexDirection="column" alignItems="center">
          <Flex alignItems="center">
            <Text mb="15px">{t('Audio')}</Text>
            {/* <QuestionHelper
                  text={t('Fun sounds to make a truly immersive pancake-flipping trading experience')}
                  placement="top-start"
                  ml="4px"
                /> */}
          </Flex>
          <Toggle id="toggle-disable-multihop-button" checked={audioPlay} scale="md" onChange={toggleSetAudioMode} />
          {/* <PancakeToggle checked={audioPlay} onChange={toggleSetAudioMode} scale="md" /> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlippageTabs
