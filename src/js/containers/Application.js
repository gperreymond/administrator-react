// react
// packages
import Debug from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import SparkApplicationComponent from './../components/spark/Application';
import ApplicationStore from './../stores/ApplicationStore';
import ApplicationActions from './../actions/ApplicationActions';

const debug = Debug('react:containers:application');

class Application extends SparkApplicationComponent {

  static getStores() {
    return [ApplicationStore];
  }

  static getPropsFromStores() {
    return ApplicationStore.getState();
  }

  constructor(props) {
    debug('constructor');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount');
    ApplicationActions.setLoading(false);
  }

  componentDidUpdate() {
    debug('componentDidUpdate');
  }

}

export default connectToStores(Application);
