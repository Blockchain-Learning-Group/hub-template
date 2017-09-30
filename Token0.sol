pragma solidity ^0.4.15;

/*
Note libraries and dependencies split into separate files and imported here
for clarity and separation.  Recommended to follow this pattern.
 */
import './ERC20.sol';
import '../utils/SafeMath.sol';
import '../utils/LoggingErrors.sol';

/*
 NOTE Replace from here down!
*/

/**
 * @title Token Template
 */
contract Token is ERC20, LoggingErrors { }
