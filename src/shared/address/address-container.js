import {connect} from 'inferno-redux';

import * as actions from '../address/address-actions';
import {Address} from './address';

export const AddressContainer = connect(
  function mapStateToProps(state) {
    return {
      state: state.address,
      width: state.app.width,
    };
  },
  dispatch => ({
    fetchAddressExecutionsId: data =>
      dispatch(actions.fetchAddressExecutionsId(data)),
    fetchAddressTransfersId: data =>
      dispatch(actions.fetchAddressTransfersId(data)),
    fetchAddressVotersId: data => dispatch(actions.fetchAddressVotersId(data)),
    fetchAddressSettleDepositsId: data =>
      dispatch(actions.fetchAddressSettleDepositsId(data)),
    fetchAddressCreateDepositsId: data =>
      dispatch(actions.fetchAddressCreateDepositsId(data)),
    fetchAccount: data => dispatch(actions.fetchAccount(data)),
    fetchActionsByAddress: data => dispatch(actions.fetchActionsByAddress(data)),
  })
)(Address);
