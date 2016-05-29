// react
// packages
import Debug from 'debug';
// local
import alt from './../alt';
import ApplicationStore from './../stores/ApplicationStore';
import ApplicationActions from './../actions/ApplicationActions';

var debug = Debug('react:stores:survey');

class SurveyStore {

  constructor() {
    this.bindListeners({
      onReceivedCurrentSurvey: ApplicationActions.RECEIVED_CURRENT_SURVEY,
    });
    this.state = {
      // Snackbar
      toastError: false,
      toastMessage: '',
      autoHideDuration: 2000,
      // stepper
      stepIndex: 0,
      stepLoading: false,
      // survey
      survey: false
    };
  }

  onReceivedCurrentSurvey(survey) {
    this.setState({
      stepIndex: 0,
      stepLoading: false,
      survey: survey
    })
  }
  onReceivedError(error) {
    debug('onReceivedError() error=%o', error);
    this.setState({
      toastError: true,
      toastMessage: error.message
    });
  }
}

export default alt.createStore(SurveyStore, 'SurveyStore');
