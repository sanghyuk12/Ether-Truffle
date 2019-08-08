pragma solidity 0.4.25;

contract Calculator {
    function add(uint a, uint b) external pure returns (uint c) {
        c = a + b;
        return c;
    }
    function sub(uint a, uint b) external pure returns (uint c) {
        c = a - b;
        return c;
    }
    function mul(uint a, uint b) external pure returns (uint c) {
        c = a * b;
        return c;
    }
    function div(uint a, uint b) external pure returns (uint c) {
        c = a / b;
        return c;
    }
}


