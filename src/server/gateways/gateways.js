import {RpcMethods, HttpProvider} from 'iotex-client-js';
import config from 'config';
import {CoinMarketCap} from './coin-market-cap';
import {WalletCore} from './wallet-core/wallet-core';
import {CrossChain} from './cross-chains';
import {CryptoCompare} from './crypto-compare'

export function setGateways(server) {
  server.gateways = server.gateways || {};
  server.gateways.coinmarketcap = new CoinMarketCap();
  server.gateways.cryptocompare = new CryptoCompare();
  server.gateways.walletCore = new WalletCore(server.config.gateways.walletCore);
  server.gateways.crossChain = new CrossChain(config.get('chains'));
  server.gateways.iotxRpcMethods = new RpcMethods(new HttpProvider(server.config.gateways.iotexCore.serverUrl));
  server.gateways.iotexCore = server.gateways.iotxRpcMethods;
}
