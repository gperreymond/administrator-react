// react
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import ApplicationActions from './../actions/ApplicationActions';

var debug = Debug('react:stores:user');

class ApplicationStore {

  constructor() {
    this.bindListeners({
      onReceivedCurrentUser: ApplicationActions.RECEIVED_CURRENT_USER,
      onReceivedLoading: ApplicationActions.RECEIVED_LOADING,
      onReceivedError: ApplicationActions.RECEIVED_ERROR,
      onHandleRequestClose:  ApplicationActions.HANDLE_REQUEST_CLOSE
    });
    this.state = {
      // Snackbar
      toastError: false,
      toastMessage: '',
      autoHideDuration: 2000,
      // Loading state
      loading: false,
      // User
      token: false,
      globalInfos: false,
      connected: false
    };
  }

  static getToken() {
    return this.state.token;
  }

  static getNextState() {
    let globalInfos = this.state.globalInfos;
    let nextState = {
      params: {}
    };
    if (!globalInfos.abibaoCompleted.length) {
      nextState.stateName = 'survey';
      nextState.params.urn = globalInfos.abibaoInProgress[0].urn;
    }
    else {
      if (!globalInfos.currentCharity) {
        if (globalInfos.abibaoCompleted.length == 1) {
          nextState.stateName = 'charitychoice';
        }
        else if(globalInfos.abibaoInProgress.length){
          nextState.stateName = 'survey';
          nextState.params.urn = globalInfos.abibaoInProgress[0].urn;
        }
        else {
          nextState.stateName = 'all-finished';
        }
      }
      else {
        if (globalInfos.surveysInProgress.length) {
          nextState.stateName = 'survey';
          nextState.params.urn = globalInfos.surveysInProgress[0].urn;
        }
        else if(globalInfos.abibaoInProgress.length){
          nextState.stateName = 'survey';
          nextState.params.urn = globalInfos.abibaoInProgress[0].urn;
        }
        else if (globalInfos.abibaoCompleted.length == 2 && !globalInfos.surveysCompleted.length) {
          nextState.stateName = 'email-sended';
        }
        else {
          nextState.params.urn = false;
          nextState.stateName = 'all-finished';
        }
      }
    }
    return nextState;
  }

  onHandleRequestClose() {
    this.setState({
      toastError: false,
      toastMessage: ''
    });
  }

  onReceivedLoading(loading) {
    debug('onReceivedLoading() loading=%s', loading);
    this.setState({
      loading: loading
    });
  }

  onReceivedCurrentUser(user) {
    debug('onReceivedCurrentUser() user=%o', user);
    this.setState({
      token: user.token,
      globalInfos: user.globalInfos,
      connected: true
    });
  }

  onReceivedError(error) {
    debug('onReceivedError() error=%o', error);
    this.setState({
      toastError: true,
      toastMessage: error.message
    });
  }
}

export default alt.createStore(ApplicationStore, 'ApplicationStore');
