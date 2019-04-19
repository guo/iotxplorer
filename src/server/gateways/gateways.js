import config from "config";
import { CoinMarketCap } from "./coin-market-cap";
import { WalletCore } from "./wallet-core/wallet-core";
import { CrossChain } from "./cross-chains";
import { CryptoCompare } from "./crypto-compare";
import { IotexGraphQL } from "./iotex-graph-ql";
import RpcMethod from "iotex-antenna/lib/rpc-method/node-rpc-method";

export function setGateways(server) {
  server.gateways = server.gateways || {};
  server.gateways.coinmarketcap = new CoinMarketCap();
  server.gateways.cryptocompare = new CryptoCompare();
  server.gateways.iotexgraphql = new IotexGraphQL();
  server.gateways.RpcMethod = new RpcMethod(
    server.config.gateways.iotexAntenna
  );
  server.gateways.walletCore = new WalletCore(
    server.config.gateways.walletCore
  );
  server.gateways.crossChain = new CrossChain(config.get("chains"));

  server.gateways.iotexCore = server.gateways.iotxRpcMethods;
}
