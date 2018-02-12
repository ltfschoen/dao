const Congress = artifacts.require("./Congress.sol");

module.exports = (deployer) => {
    deployer.deploy(Congress);
};