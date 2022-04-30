//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    string public message;

    event messageChanged(string oldmsg, string newmsg);

    constructor(string memory firstMessage) {
        console.log("Deploying the contract with greeting:", firstMessage);
        message = firstMessage;
    }

    function returnMessage() view public returns (string memory){
        return message;
    }

    function update(string memory newMessage) public {
        console.log("Changing message from '%s' to '%s'", message, newMessage);
        message = newMessage;

        emit messageChanged(message, newMessage);
    }
}
