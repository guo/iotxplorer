import { Route } from "inferno-router";
import window from "global/window";

import { AppContainer } from "./app-container";
import { NotFound } from "./common/not-found";
import { BlockchainExplorerContainer } from "./blockchain-explorer/blockchain-explorer-container";
import { ExecutionContainer } from "./execution/execution-container";
import { ExecutionsContainer } from "./executions/executions-container";
import { TransferContainer } from "./transfer/transfer-container";
import { TransfersContainer } from "./transfers/transfers-container";
import { AddressContainer } from "./address/address-container";
import { BlockContainer } from "./block/block-container";
import { BlocksContainer } from "./blocks/blocks-container";
import {
  SITE_URL,
  BLOCK,
  BLOCKS,
  ADDRESS,
  EXECUTION,
  EXECUTIONS,
  TRANSFER,
  TRANSFERS,
  VOTE,
  VOTES,
  WALLET,
  DEPOSIT,
  STAKING,
  STAKING_DASHBOARD,
  HOW_TO_STAKE,
  EDUCATION,
  ACTION
} from "./common/site-url";
import { VoteContainer } from "./vote/vote-container";
import { VotesContainer } from "./votes/votes-container";
import { WalletContainer } from "./wallet/wallet-container";
import { SettleDepositContainer } from "./deposit/settle-deposit-container";
import { CreateDepositContainer } from "./deposit/create-deposit-container";
import { StakingContainer } from "./staking/staking-container";
import { StakingDashboardContainer } from "./staking-dashboard/staking-dashboard-container";
import { HowToStakeContainer } from "./staking-dashboard/staking-voting/how-to-stake-container";
import { EducationContainer } from "./education/education-container";
import { UnderstandingIoTeXContainer } from "./education/understanding-iotex/understanding-iotex-container";
import { UsingTheTestnetContainer } from "./education/using-the-testnet/using-the-testnet-container";
import { VotingAndDelegatingContainer } from "./education/voting-and-delegating/voting-and-delegating-container";
import { CalculatorsContainer } from "./staking-dashboard/calculators/staking-calcs-container";
import { ActionContainer } from "./action/action-container";

export function createViewRoutes(routePrefix = "/") {
  return (
    <Route path={routePrefix} component={AppContainer}>
      <RoutePage path={SITE_URL} component={BlockchainExplorerContainer} />
      <RoutePage path={EXECUTIONS.INDEX} component={ExecutionsContainer} />
      <RoutePage path={EXECUTION.INDEX} component={ExecutionContainer} />
      <RoutePage path={TRANSFERS.INDEX} component={TransfersContainer} />
      <RoutePage path={TRANSFER.INDEX} component={TransferContainer} />

      <RoutePage path={BLOCKS.INDEX} component={BlocksContainer} />
      <RoutePage path={BLOCK.INDEX} component={BlockContainer} />

      <RoutePage
        path={DEPOSIT.INDEX_SETTLE}
        component={SettleDepositContainer}
      />
      <RoutePage
        path={DEPOSIT.INDEX_CREATE}
        component={CreateDepositContainer}
      />

      <RoutePage path={ADDRESS.INDEX} component={AddressContainer} />

      <RoutePage path={VOTES.INDEX} component={VotesContainer} />
      <RoutePage path={VOTE.INDEX} component={VoteContainer} />

      <RoutePage path={WALLET.INDEX} component={WalletContainer} />

      <RoutePage path={STAKING.INDEX} component={StakingContainer} />

      <RoutePage
        path={STAKING_DASHBOARD.INDEX}
        component={StakingDashboardContainer}
      />

      <RoutePage path={HOW_TO_STAKE.INDEX} component={HowToStakeContainer} />

      <RoutePage path={EDUCATION.INDEX} component={EducationContainer} />

      <RoutePage
        path={EDUCATION.UNDERSTANDING_IOTEX}
        component={UnderstandingIoTeXContainer}
      />

      <RoutePage
        path={EDUCATION.USING_THE_TESTNET}
        component={UsingTheTestnetContainer}
      />

      <RoutePage
        path={EDUCATION.VOTING_AND_DELEGATING}
        component={VotingAndDelegatingContainer}
      />

      <RoutePage
        path={STAKING_DASHBOARD.CALCULATORS}
        component={CalculatorsContainer}
      />

      <RoutePage path={ACTION.INDEX} component={ActionContainer} />

      {/* <RoutePage path={DELEGATES.INDEX} component={DelegatesContainer}/>*/}

      <RoutePage path='*' component={NotFound} />
    </Route>
  );
}

function RoutePage(props) {
  return <Route onEnter={onEnter} {...props} />;
}

function onEnter() {
  // eslint-disable-next-line no-unused-expressions
  window && window.ga && window.ga("send", "pageview");
  scrollTop();
}

function scrollTop() {
  if (window && window.scrollTo) {
    window.scrollTo(0, 0);
  }
}
