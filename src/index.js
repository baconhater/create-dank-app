import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.less';
import './main.less';
import { BrowserRouter as Router } from 'react-router-dom';

import Shell from './core/layout/shell/Shell';
import { history } from './core/_helpers/history';

function App() {
  return (
      <Router history={history}>
          //TODO SHELL
        <Shell />
      </Router>
  );
}

render(<App />, document.getElementById('app'));
