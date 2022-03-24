// contracts/GLDToken.sol/ SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract UBToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("UB Token", "UBT") {
        _mint(msg.sender, initialSupply);
    }
}