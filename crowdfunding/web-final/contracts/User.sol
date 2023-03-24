pragma solidity ^0.8.0;

contract User {
    
    mapping(string => string) private idToName;
    
    function setName(string memory id, string memory name) public {
        idToName[id] = name;
    }
    
    function getName(string memory id) public view returns (string memory) {
        return idToName[id];
    }
    
}