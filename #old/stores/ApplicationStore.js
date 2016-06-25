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
      onReceivedLoading: ApplicationActions.RECEIVED_LOADING,
      onReceivedEmailForRegister: ApplicationActions.RECEIVED_EMAIL_FOR_REGISTER,
      onReceivedCurrentUser: ApplicationActions.RECEIVED_CURRENT_USER,
      onReceivedError: ApplicationActions.RECEIVED_ERROR
    });
    this.state = {
      // Loading state
      loading: false,
      // User
      token: false,
      globalInfos: false,
      // register
      emailForRegister: false,
      entityForRegister: false
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

  onReceivedLoading(loading) {
    debug('onReceivedLoading loading=%s', loading);
    this.setState({
      loading: loading
    });
  }

  onReceivedEmailForRegister(email) {
    debug('onReceivedEmailForRegister email=%o', email);
    this.setState({
      emailForRegister: email
    });
  }

  onReceivedCurrentUser(user) {
    debug('onReceivedCurrentUser user=%o', user);
    this.setState({
      token: user.token,
      globalInfos: user.globalInfos
    });
  }

  onReceivedError(error) {
    debug('onReceivedError error=%o', error);
  }
}

export default alt.createStore(ApplicationStore, 'ApplicationStore');
