const GuardaToken = artifacts.require("GuardaToken");
require('dotenv').config()
const BN = require('bignumber.js')

console.log(new BN(process.env.MARKET_CAP).multipliedBy('1e' + process.env.DECIMALS).toString());

module.exports = function (deployer) {
  deployer.deploy(GuardaToken, new BN(process.env.MARKET_CAP).multipliedBy('1e' + process.env.DECIMALS).toString());
};
