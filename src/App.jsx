import React from 'react';

import {
      AppHeader,
      AppMain,
      AppFooter, } from './react-components/core'

//** Importing Styles */
import './styles/App.scss';
import './stylizer/utils/reset.scss'
import './stylizer/index.scss'

function App() {
      return (
            <div className="App">
                  <AppHeader/>
                  <AppMain/>
                  <AppFooter/>
            </div>
      )
}

export default App;
