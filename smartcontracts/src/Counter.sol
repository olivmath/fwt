// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    error CustomError(string message, uint256 yourAmount);

    function getError(uint256 yourAmount) public pure returns (string memory) {
        revert CustomError("An error occurred", yourAmount);
    }
}
