pragma solidity ^0.4.11;

import './utils/LoggingErrors.sol';
import './token/Token.sol';
import './utils/SafeMath.sol';

/**
 * @title Template Hub
 * @dev Hub that enables users to share resources and are rewarded for contribution
 * with a given token.
 */
contract Hub is LoggingErrors {
  // Specify the reward for conttibution to the hub
  // uint public constant RESOURCE_REWARD = 1000;

  using SafeMath for uint;

  /**
   * Data Structures
   */
   // Define a user object, struct, for the attributes you wish users to have
   struct User_ {
     string userName_;
     string position_;
     string location_;
     State_ state_;
   }

   // Define a resource object, struct, for the attributes you wish resources to hold
   struct Resource_ {
     string url_;
     address user_; // user that created this resource
     uint reputation_; // # of likes, shares, etc.
     uint addedAt_; // Block number when this resource was added
     State_ state_;
   }

   // A State enum to define the current state of an object
   enum State_ { doesNotExist, active, inactive, terminated }

  /**
   * Storage
   */
  address public owner_; // owner EOA
  address public token_; // token contract

  // Array of resources ids, hash of the url
  bytes32[] public resourceIds_;
  // Map the resource ids to its associated data
  mapping(bytes32 => Resource_) public resources_;

  // Array of user ids
  address[] public users_;
  // Lookup user info based on id
  mapping(address => User_) public userData_;

  /**
   * Events
   */
   /*event LogResourceAdded(address user, string resourceUrl, uint blockNumber);*/
   /*event LogUserAdded(address user);*/

  /**
   * @dev CONSTRUCTOR - Set the address of the _blgToken
   * @param _token The blg token contract.
   */
  function Hub(address _token) {
    token_ = _token;
    owner_ = msg.sender;
  }

  /**
   * External
   */

  /**
   * @dev Add a new resource to the hub.
   * @param _resourceUrl The url of the resource to be added.
   * @return Success of the transaction.
   */
  function addResource(string _resourceUrl)
    external
    returns (bool)
  {
    /*
    TODO
     */

    return true;
  }

  /**
   * @dev Add a new user that may write to the hub.
   * @param _userEOA User owner EOD, used as their id.
   * @param _userName Screen or real name of user.
   * @param _position Professional position.
   * @param _location Geographic location.
   * @return Success of the transaction.
   */
  function addUser(
    address _userEOA,
    string _userName,
    string _position,
    string _location
  )
    external
    returns (bool)
  {
    /*
    TODO
     */

    return true;
  }

  // CONSTANTS

  /**
   * @return The array of users.
   */
  function getAllUsers()
    external
    constant
    returns(address[])
  {
    return users_;
  }
}
