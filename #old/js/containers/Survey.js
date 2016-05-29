// react
import React, { Component } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import { Paper, Snackbar } from 'material-ui';
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import RaisedButton from './../components/RaisedButton';
import ApplicationActions from './../actions/ApplicationActions';
import ApplicationStore from './../stores/ApplicationStore';
import SurveyStore from './../stores/SurveyStore';

const debug = Debug('react:containers:survey');


class AbibaoStepperRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Step>
        <StepLabel> </StepLabel>
      </Step>
    );
  }
}

class AbibaoStepper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.survey===false) {
      return (<div></div>);
    }
    let rows = [];
    this.props.survey.items.forEach(function(item) {
      rows.push(<AbibaoStepperRow key={ item.urn } item={ item } />)
    }.bind(this));
    return (
      <Stepper activeStep={ this.props.stepIndex } children={ rows } />
    );
  }
}

class Survey extends Component {

  constructor(props) {
    debug('constructor()');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount()');
    this.nextState = ApplicationStore.getNextState();
    this.token = ApplicationStore.getToken();
    ApplicationActions.loadSurvey(this.token, this.nextState.params.urn);
  }

  static getStores() {
    return [SurveyStore];
  }

  static getPropsFromStores() {
    let _store = SurveyStore.getState();
    return _store;
  }

  renderContent() {
    return (
      <div></div>
    );
  }

  render() {
    debug('render()');
    return (
      <Paper style={ styles.paperContainer } zDepth={ 0 } rounded={ false }>
        <div>
          <AbibaoStepper stepIndex={ this.props.stepIndex } survey={ this.props.survey } />
          <ExpandTransition loading={ this.props.stepLoading } open={ true }>
            { this.renderContent() }
          </ExpandTransition>
        </div>
      </Paper>
    );
  }

}

  export default connectToStores(Survey);
