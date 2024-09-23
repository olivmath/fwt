// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IERC20 {
    function symbol() external returns (string memory);
    function name() external returns (string memory);
    function decimals() external returns (uint8);

    function allowance(address owner, address spender) external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function totalSupply() external view returns (uint256);

    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);

    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
}
