pragma solidity ^0.4.19;

/**
 * The contractName contract does this and that...
 */
contract Inbox {
	string public message;

	function Inbox (string initialMessage) public {
		message = initialMessage;
	}

	function setMessage (string newMessage) public {
		message = newMessage;
	}
	
}
