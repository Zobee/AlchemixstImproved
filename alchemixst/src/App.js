import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Store from './components/Store/Store'
import DrumPad from './components/DrumPad/DrumPad'
import Shutters from './components/Shutters'


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/"component={Main}/>
        <Route path='/pad' component={DrumPad}/>
        <Route path='/store' component={Store}/>
      </Switch>
      <Shutters shutterTextTop={"Dough"} shutterTextBottom={"Joe"}/>
    </div>
  );
}

export default App;
