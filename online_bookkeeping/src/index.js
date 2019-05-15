import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BookKeepingApp from './containers/BookKeepingApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BookKeepingApp />, document.getElementById('root'));

serviceWorker.unregister();