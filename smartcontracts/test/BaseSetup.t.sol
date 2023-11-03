// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {Counter} from "../src/Counter.sol";
import {Utils} from "./Utils.t.sol";

contract BaseSetup is Utils {
    Counter counter;

    address[] users;
    address deployer;
    address alice;
    address bob;

    function createMockUsers(address[] memory myUsers) private {
        deployer = myUsers[2];
        alice = myUsers[0];
        bob = myUsers[1];

        vm.label(deployer, "deployer (dev)");
        vm.label(alice, "alice");
        vm.label(bob, "bob");
    }

    function setUp() public virtual {
        Utils utils = new Utils();
        users = utils.createUsers(3);

        createMockUsers(users);

        vm.startPrank(deployer);
        counter = new Counter();
        vm.stopPrank();
    }
}
