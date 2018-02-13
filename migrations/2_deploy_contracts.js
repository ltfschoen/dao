const Owned = artifacts.require("./Owned.sol");
const Congress = artifacts.require("./Congress.sol");

module.exports = (deployer) => {
    deployer.deploy(Owned);
    deployer.deploy(Congress, 0, 0, 0);
};