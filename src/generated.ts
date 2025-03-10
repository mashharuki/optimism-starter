import {
  useNetwork,
  useChainId,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AttestationStation
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'about',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'key', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'AttestationCreated',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: '_attestations',
        internalType: 'struct AttestationStation.AttestationData[]',
        type: 'tuple[]',
        components: [
          { name: 'about', internalType: 'address', type: 'address' },
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'val', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_about', internalType: 'address', type: 'address' },
      { name: '_key', internalType: 'bytes32', type: 'bytes32' },
      { name: '_val', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'attest',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'attestations',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationAddress = {
  10: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
  420: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
  31337: '0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77',
} as const

/**
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export const attestationStationConfig = {
  address: attestationStationAddress,
  abi: attestationStationABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Semver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const semverABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_major', internalType: 'uint256', type: 'uint256' },
      { name: '_minor', internalType: 'uint256', type: 'uint256' },
      { name: '_patch', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attestations"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttestations<
  TFunctionName extends 'attestations',
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attestations',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"version"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof attestationStationABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof attestationStationABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractRead({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<
    typeof attestationStationABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof attestationStationAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof attestationStationABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof attestationStationABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof attestationStationABI, TFunctionName, TMode>({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttest<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof attestationStationAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof attestationStationABI,
          'attest'
        >['request']['abi'],
        'attest',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'attest' }
    : UseContractWriteConfig<typeof attestationStationABI, 'attest', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'attest'
      } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractWrite<typeof attestationStationABI, 'attest', TMode>({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attest',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function usePrepareAttestationStationWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof attestationStationABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link attestationStationABI}__ and `functionName` set to `"attest"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function usePrepareAttestationStationAttest(
  config: Omit<
    UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return usePrepareContractWrite({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    functionName: 'attest',
    ...config,
  } as UsePrepareContractWriteConfig<typeof attestationStationABI, 'attest'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    ...config,
  } as UseContractEventConfig<typeof attestationStationABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link attestationStationABI}__ and `eventName` set to `"AttestationCreated"`.
 *
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://explorer.optimism.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
 * -
 */
export function useAttestationStationAttestationCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof attestationStationABI, 'AttestationCreated'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof attestationStationAddress } = {} as any,
) {
  const { chain } = useNetwork()
  const defaultChainId = useChainId()
  const chainId = config.chainId ?? chain?.id ?? defaultChainId
  return useContractEvent({
    abi: attestationStationABI,
    address:
      attestationStationAddress[
        chainId as keyof typeof attestationStationAddress
      ],
    eventName: 'AttestationCreated',
    ...config,
  } as UseContractEventConfig<
    typeof attestationStationABI,
    'AttestationCreated'
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"number"`.
 */
export function useCounterNumber<
  TFunctionName extends 'number',
  TSelectData = ReadContractResult<typeof counterABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: counterABI,
    functionName: 'number',
    ...config,
  } as UseContractReadConfig<typeof counterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof counterABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof counterABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, TFunctionName, TMode>({
    abi: counterABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function useCounterIncrement<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'increment'
        >['request']['abi'],
        'increment',
        TMode
      > & { functionName?: 'increment' }
    : UseContractWriteConfig<typeof counterABI, 'increment', TMode> & {
        abi?: never
        functionName?: 'increment'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'increment', TMode>({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function useCounterSetNumber<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof counterABI,
          'setNumber'
        >['request']['abi'],
        'setNumber',
        TMode
      > & { functionName?: 'setNumber' }
    : UseContractWriteConfig<typeof counterABI, 'setNumber', TMode> & {
        abi?: never
        functionName?: 'setNumber'
      } = {} as any,
) {
  return useContractWrite<typeof counterABI, 'setNumber', TMode>({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__.
 */
export function usePrepareCounterWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"increment"`.
 */
export function usePrepareCounterIncrement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'increment'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'increment',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'increment'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link counterABI}__ and `functionName` set to `"setNumber"`.
 */
export function usePrepareCounterSetNumber(
  config: Omit<
    UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: counterABI,
    functionName: 'setNumber',
    ...config,
  } as UsePrepareContractWriteConfig<typeof counterABI, 'setNumber'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__.
 */
export function useCounterEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof counterABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    ...config,
  } as UseContractEventConfig<typeof counterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link counterABI}__ and `eventName` set to `"Transfer"`.
 */
export function useCounterTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof counterABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: counterABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof counterABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__.
 */
export function useSemverRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof semverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: semverABI, ...config } as UseContractReadConfig<
    typeof semverABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link semverABI}__ and `functionName` set to `"version"`.
 */
export function useSemverVersion<
  TFunctionName extends 'version',
  TSelectData = ReadContractResult<typeof semverABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: semverABI,
    functionName: 'version',
    ...config,
  } as UseContractReadConfig<typeof semverABI, TFunctionName, TSelectData>)
}
