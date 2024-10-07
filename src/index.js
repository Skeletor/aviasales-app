import React from 'react';
import ReactDOM from 'react-dom/client';

import { Avatar, Flex } from 'antd';

import { Provider } from 'react-redux';

import Main from './components/Main/main';

import store from './store/store';
import logo from './resources/logo.svg'
import './index.css';

const App = () => {
  return (
    <Provider store={ store }>
      <div className='app'>
        <Flex vertical>
          <Avatar className='app__logo' src={ logo } size={ 80 } />
          <Main />
        </Flex>
      </div>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
