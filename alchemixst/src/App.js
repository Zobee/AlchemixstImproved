import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import DrumPad from './components/DrumPad/DrumPad'
import Shutters from './components/Shutters'
import initReactFastclick from 'react-fastclick';
initReactFastclick();

const App = () => {
  const [animationEnd, setAnimationEnd] = useState(false)
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/"component={Main}/>
        <Route path='/pad' component={DrumPad}/>
      </Switch>
      {!animationEnd && <Shutters setAnimationEnd={setAnimationEnd} shutterTextTop={"Dough"} shutterTextBottom={"Joe"}/>}
    </div>
  );
}

export default App;
