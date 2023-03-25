pragma solidity ^0.8.0;

contract User {
    
    mapping(address => string) private idToName;
    
    function setName(address id, string memory name) public {
        idToName[id] = name;
    }
    
    function getName(address id) public view returns (string memory) {
        return idToName[id];
    }
    
}