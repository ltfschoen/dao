pragma solidity ^0.4.19;

interface Token {
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);
}