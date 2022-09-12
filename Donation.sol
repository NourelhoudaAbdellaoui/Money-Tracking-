 //SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
//donation contract 
contract Donation{
    // define a new type thznks to struct which define a new type and regrouppinlg into into some types of variables 
    struct Donor{
        uint id ;//the id donor 
        string name;//the name of donor 
        uint256 amount;//the amount of the donor 
        address sender_address;//Donprs wallet address 
    }
    uint256 id=0;
    
    mapping(uint=>Donor)public sender;
    function addDonor(string memory name)public payable {
        id+=1;
        sender[id]=Donor(id,name,msg.value,msg.sender);
    }
    


}
