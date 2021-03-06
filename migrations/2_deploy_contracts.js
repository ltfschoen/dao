const Owned = artifacts.require("./Owned.sol");
const TokenRecipient = artifacts.require("./TokenRecipient.sol");
const Congress = artifacts.require("./Congress.sol");

module.exports = (deployer) => {
    // Deploy library Owned, Token, and TokenRecipient
    deployer.deploy(Owned);
    deployer.deploy(TokenRecipient);
    // Link Owned and TokenRecipient to contract Congress before deploying Congress
    deployer.link(Owned, Congress);
    deployer.link(TokenRecipient, Congress);
    // Deploy contract Congress
    deployer.deploy(Congress, 0, 0, 0);
};