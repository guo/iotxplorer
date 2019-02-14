import {connect} from 'inferno-redux';

import {fetchExecutions} from '../executions/executions-actions';
import {fetchTransfers} from '../transfers/transfers-actions';
import {fetchBlocks} from '../blocks/blocks-actions';
import {fetchVotes} from '../votes/votes-actions';
import {fetchConsensusMetrics} from '../consensus-metrics/consensus-metrics-actions';
import {BlockchainExplorer} from './blockchain-explorer';
import {fetchMarketData} from './market-dashboard-actions';

export const BlockchainExplorerContainer = connect(
  function mapStateToProps(state) {
    return {
      executions: state.executions,
      transfers: state.transfers,
      blocks: state.blocks,
      votes: state.votes,
      consensus: state.consensus,
      width: state.app.width,
      statistic: state.nav.statistic,
      chainId: state.base.chainId,
      marketData: state.marketDashboard.marketData,
      fetching: state.fetching,
      error: state.error,
    };
  },
  dispatch => ({
    fetchExecutions: data => dispatch(fetchExecutions(data)),
    fetchTransfers: data => dispatch(fetchTransfers(data)),
    fetchBlocks: data => dispatch(fetchBlocks(data)),
    fetchVotes: data => dispatch(fetchVotes(data)),
    fetchConsensusMetrics: () => dispatch(fetchConsensusMetrics()),
    fetchMarketData: () => dispatch(fetchMarketData()),
  }),
)(BlockchainExplorer);
