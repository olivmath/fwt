// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Counter {
    error CustomError(string message, uint256 yourAmount);

    event YourBalance(address caller, uint256 amount);
    event YouCall(address caller, uint256 amount);

    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function getError(uint256 yourAmount) public pure returns (string memory) {
        revert CustomError("An error occurred", yourAmount);
    }

    function launchEvent() public payable {
        emit YouCall(msg.sender, msg.value);
    }

    function yourETHBalance() public {
        emit YourBalance(msg.sender, msg.sender.balance);
    }
}
