// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ToDo is Ownable {
  
  struct TokenInfo {
        string tokenAddress;
        string tokenType;
        uint256 quantity;
  }

  uint lastTokenInfoId;
  uint[] tokenInfoIds;
  mapping(uint => TokenInfo) assetss;
  TokenInfo[] assets;

  event PortfolioCreated(TokenInfo);

  function ToDoId() public {
    lastTokenInfoId = 0;
  }

  function createPortfolio(TokenInfo[] calldata tokenInfo) public onlyOwner payable {
        delete assets;
        for (uint i = 0; i < tokenInfo.length; i++) {
            assets.push(tokenInfo[i]);
        }
        //emit SetPortfolio(assets);
  }

  function createPortfolios(TokenInfo[] calldata tokenInfo) public onlyOwner payable {
            lastTokenInfoId++;
            assetss[lastTokenInfoId] = tokenInfo[lastTokenInfoId];
            tokenInfoIds.push(lastTokenInfoId);
            emit PortfolioCreated(assetss[lastTokenInfoId]);
            
  }

  // function getPortfolioIds() public view returns(uint[]) {
  //   return tokenInfoIds;
  // }


  function getTokenInfo(uint id) public view
  returns(
      string memory,
      string memory ,
      uint256
     ) { 
       
      return(
        assets[id].tokenAddress,
        assets[id].tokenType,
        assets[id].quantity
      );
  }

  // function getPortfolio() public view returns(TokenInfo[]) {
  //   return assets;
  // }

  modifier portfolieExists(uint id) {
    if( keccak256(abi.encodePacked(assetss[id].tokenAddress)) == keccak256(abi.encodePacked("0")) ) {
         revert();
       }
       _;
  }
  

  
}
