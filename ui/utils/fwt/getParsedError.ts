import { BaseError, ContractFunctionRevertedError } from "viem";

/**
 * Parses an viem/wagmi error to get a displayable string
 * @param e - error object
 * @returns parsed error string
 */
export const getParsedError = (error: any): string => {
  const parsedError = error?.walk ? error.walk() : error;

  if (parsedError instanceof BaseError) {
    if (parsedError.details) {
      return parsedError.details;
    }

    if (parsedError.shortMessage) {
      if (
        parsedError instanceof ContractFunctionRevertedError &&
        parsedError.data
      ) {
        const errorName = parsedError.data.errorName || "Error";
        let argsString = "";
        if (parsedError.data?.abiItem && 'inputs' in parsedError.data?.abiItem && parsedError.data?.abiItem.inputs) {
          argsString = parsedError.data?.abiItem?.inputs
            .map((input, index) => `${input.name}: ${parsedError.data?.args?.[index] ?? 'undefined'}`)
            .join(", ");
        }

        return `${parsedError.shortMessage.replace(/reverted\.$/, "reverted with the following reason:")}\n${errorName}(${argsString})`;
      }

      return parsedError.shortMessage;
    }

    return parsedError.message ?? parsedError.name ?? "An unknown error occurred";
  }

  return parsedError?.message ?? "An unknown error occurred";
};
