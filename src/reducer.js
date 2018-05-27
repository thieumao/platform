import { combineReducers } from 'redux';
import web3Reducer from './util/web3/web3Reducer';
import ipfsReducer from './util/ipfs/ipfsReducer';
import authReducer from './util/auth/authReducer';
import certificatesReducer from './containers/CertificatesPage/certificatesReducer';
import addCertificateReducer from './containers/AddCertificatePage/addCertificateReducer';

const reducer = combineReducers({
  web3: web3Reducer,
  ipfs: ipfsReducer,
  auth: authReducer,
  certificates: certificatesReducer,
  addCertificate: addCertificateReducer,
});

export default reducer;
