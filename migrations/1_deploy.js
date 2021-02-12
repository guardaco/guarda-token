const GuardaToken = artifacts.require("GuardaToken");
require('dotenv').config()

module.exports = function (deployer) {
  deployer.deploy(GuardaToken, web3.utils.toWei(process.env.MARKET_CAP, 'ether'));
};
