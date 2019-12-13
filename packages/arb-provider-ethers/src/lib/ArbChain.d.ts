/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers';
import { Listener, Provider } from 'ethers/providers';
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from '.';

interface ArbChainInterface extends Interface {
    functions: {
        confirmDisputableAsserted: TypedFunctionDescription<{
            encode([_preconditionHash, _afterHash, _numSteps, _numGas, _messages, _logsAccHash]: [
                Arrayish,
                Arrayish,
                BigNumberish,
                BigNumberish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        initiateChallenge: TypedFunctionDescription<{
            encode([_beforeHash, _beforeInbox, _timeBounds, _assertionHash]: [
                Arrayish,
                Arrayish,
                (BigNumberish)[],
                Arrayish,
            ]): string;
        }>;

        pendingDisputableAssert: TypedFunctionDescription<{
            encode([
                _beforeHash,
                _beforeInbox,
                _afterHash,
                _messagesAccHash,
                _logsAccHash,
                _numSteps,
                _numGas,
                _timeBounds,
            ]: [
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                Arrayish,
                BigNumberish,
                BigNumberish,
                (BigNumberish)[],
            ]): string;
        }>;

        completeChallenge: TypedFunctionDescription<{
            encode([_players, _rewards]: [(string)[], (BigNumberish)[]]): string;
        }>;

        initialize: TypedFunctionDescription<{
            encode([
                _vmState,
                _gracePeriod,
                _maxExecutionSteps,
                _escrowRequired,
                _owner,
                _challengeFactoryAddress,
                _globalInboxAddress,
            ]: [Arrayish, BigNumberish, BigNumberish, BigNumberish, string, string, string]): string;
        }>;

        activateVM: TypedFunctionDescription<{ encode([]: []): string }>;

        ownerShutdown: TypedFunctionDescription<{ encode([]: []): string }>;

        init: TypedFunctionDescription<{
            encode([
                _vmState,
                _gracePeriod,
                _maxExecutionSteps,
                _escrowRequired,
                _owner,
                _challengeLauncherAddress,
                _globalInboxAddress,
            ]: [Arrayish, BigNumberish, BigNumberish, BigNumberish, string, string, string]): string;
        }>;

        increaseDeposit: TypedFunctionDescription<{ encode([]: []): string }>;
    };

    events: {
        PendingDisputableAssertion: TypedEventDescription<{
            encodeTopics([fields, asserter, timeBounds, numSteps, numGas, deadline]: [
                null,
                null,
                null,
                null,
                null,
                null,
            ]): string[];
        }>;

        ConfirmedDisputableAssertion: TypedEventDescription<{
            encodeTopics([newState, logsAccHash]: [null, null]): string[];
        }>;

        ChallengeLaunched: TypedEventDescription<{
            encodeTopics([challengeContract, challenger]: [null, null]): string[];
        }>;
    };
}

export class ArbChain extends Contract {
    connect(signerOrProvider: Signer | Provider | string): ArbChain;
    attach(addressOrName: string): ArbChain;
    deployed(): Promise<ArbChain>;

    on(event: EventFilter | string, listener: Listener): ArbChain;
    once(event: EventFilter | string, listener: Listener): ArbChain;
    addListener(eventName: EventFilter | string, listener: Listener): ArbChain;
    removeAllListeners(eventName: EventFilter | string): ArbChain;
    removeListener(eventName: any, listener: Listener): ArbChain;

    interface: ArbChainInterface;

    functions: {
        currentDeposit(validator: string): Promise<BigNumber>;

        vm(): Promise<{
            machineHash: string;
            pendingHash: string;
            inbox: string;
            asserter: string;
            escrowRequired: BigNumber;
            deadline: BigNumber;
            sequenceNum: BigNumber;
            gracePeriod: number;
            maxExecutionSteps: number;
            state: number;
            activeChallengeManager: string;
            0: string;
            1: string;
            2: string;
            3: string;
            4: BigNumber;
            5: BigNumber;
            6: BigNumber;
            7: number;
            8: number;
            9: number;
            10: string;
        }>;

        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _numGas: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        initiateChallenge(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _timeBounds: (BigNumberish)[],
            _assertionHash: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _numGas: BigNumberish,
            _timeBounds: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        completeChallenge(
            _players: (string)[],
            _rewards: (BigNumberish)[],
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        initialize(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeFactoryAddress: string,
            _globalInboxAddress: string,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        activateVM(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        ownerShutdown(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        init(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeLauncherAddress: string,
            _globalInboxAddress: string,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        increaseDeposit(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        getState(): Promise<number>;
        challengeFactory(): Promise<string>;
        terminateAddress(): Promise<string>;
        exitAddress(): Promise<string>;
        owner(): Promise<string>;
        escrowRequired(): Promise<BigNumber>;
        globalInbox(): Promise<string>;
    };

    filters: {
        PendingDisputableAssertion(
            fields: null,
            asserter: null,
            timeBounds: null,
            numSteps: null,
            numGas: null,
            deadline: null,
        ): EventFilter;

        ConfirmedDisputableAssertion(newState: null, logsAccHash: null): EventFilter;

        ChallengeLaunched(challengeContract: null, challenger: null): EventFilter;
    };

    estimate: {
        confirmDisputableAsserted(
            _preconditionHash: Arrayish,
            _afterHash: Arrayish,
            _numSteps: BigNumberish,
            _numGas: BigNumberish,
            _messages: Arrayish,
            _logsAccHash: Arrayish,
        ): Promise<BigNumber>;

        initiateChallenge(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _timeBounds: (BigNumberish)[],
            _assertionHash: Arrayish,
        ): Promise<BigNumber>;

        pendingDisputableAssert(
            _beforeHash: Arrayish,
            _beforeInbox: Arrayish,
            _afterHash: Arrayish,
            _messagesAccHash: Arrayish,
            _logsAccHash: Arrayish,
            _numSteps: BigNumberish,
            _numGas: BigNumberish,
            _timeBounds: (BigNumberish)[],
        ): Promise<BigNumber>;

        completeChallenge(_players: (string)[], _rewards: (BigNumberish)[]): Promise<BigNumber>;

        initialize(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeFactoryAddress: string,
            _globalInboxAddress: string,
        ): Promise<BigNumber>;

        activateVM(): Promise<BigNumber>;

        ownerShutdown(): Promise<BigNumber>;

        init(
            _vmState: Arrayish,
            _gracePeriod: BigNumberish,
            _maxExecutionSteps: BigNumberish,
            _escrowRequired: BigNumberish,
            _owner: string,
            _challengeLauncherAddress: string,
            _globalInboxAddress: string,
        ): Promise<BigNumber>;

        increaseDeposit(): Promise<BigNumber>;
    };
}
