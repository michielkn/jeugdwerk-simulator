import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/foundation-sites/dist/css/foundation.css'
import registerServiceWorker from './registerServiceWorker';

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

jquery(document).foundation();
