// @flow

import config from 'config';
import type {Server} from '../lib/server';
import {setBlockchainExplorerRoutes} from '../shared/blockchain-explorer/blockchain-explorer-handler';
import {setExecutionHandler} from '../shared/execution/execution-handler';
import {setExecutionsHandler} from '../shared/executions/executions-handler';
import {setTransferHandler} from '../shared/transfer/transfer-handler';
import {setTransfersHandler} from '../shared/transfers/transfers-handler';
import {setAddressRoutes} from '../shared/address/address-handler';
import {setBlockRoutes} from '../shared/block/block-handler';
import {setBlocksRoutes} from '../shared/blocks/blocks-handler';
import {setNavRoutes} from '../shared/common/nav/nav-handler';
import {setVoteRoutes} from '../shared/vote/vote-handler';
import {setVotesRoutes} from '../shared/votes/votes-handler';
import {setConsensusMetricsRoutes} from '../shared/consensus-metrics/consensus-metrics-handler';
import {setContractRoutes} from '../shared/wallet/contract/contract-handler';
import {setWalletRoutes} from '../shared/wallet/wallet-handler';
import {setDelegateRoutes} from '../shared/delegates/delegates-handler';
import {setDepositRoutes} from '../shared/deposit/deposit-handler';
import {version} from '../../package.json';
import {setJsonRpcRoutes} from './json-rpc/json-rpc';
import {setMarketDashboardRoutes} from '../shared/blockchain-explorer/market-dashboard-handler';
import { setStakingRoutes } from '../shared/staking/staking-handler';
import { setLineChartRoutes } from '../shared/blockchain-explorer/line-chart-handler';
import {setStakingDashboardRoutes} from '../shared/staking-dashboard/staking-dashboard-handler';

// eslint-disable-next-line max-statements
export function setServerRoutes(server: Server) {
  // Health checks
  server.get('health', '/health', function onHealth(ctx) {
    ctx.body = 'OK';
  });

  // Optional route for testing error handling
  server.get(
    'trigger-error',
    '/trigger-error',
    function triggerError(ctx) {
      server.logger.error('Testing an error');
    }
  );

  server.use(async function globalConfig(ctx, next) {
    const chains = config.chains;
    const href = ctx.href;
    ctx.setState('base.chains', chains);
    ctx.setState('base.href', href);
    ctx.setState('base.version', version);
    const curChain = chains.find(c => {
      return href.indexOf(c.url) === 0;
    });
    const chainId = curChain ? curChain.id : 1;
    ctx.setState('base.chainId', chainId);
    await next();
  });

  setJsonRpcRoutes(server);
  setNavRoutes(server);
  setConsensusMetricsRoutes(server);
  setBlockchainExplorerRoutes(server);
  setMarketDashboardRoutes(server);
  setLineChartRoutes(server);

  setExecutionHandler(server);
  setExecutionsHandler(server);

  setTransferHandler(server);
  setTransfersHandler(server);

  setAddressRoutes(server);

  setVoteRoutes(server);
  setVotesRoutes(server);

  setBlockRoutes(server);
  setBlocksRoutes(server);

  setDepositRoutes(server);

  setWalletRoutes(server);
  setContractRoutes(server);

  setDelegateRoutes(server);

  setStakingRoutes(server);

  setStakingDashboardRoutes(server);
}
