import React from 'react';
import './index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Question from './components/questions';
import QuestionFinished from './components/questionFinished';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomePage} exact></Route>
        <Route path="/createQuestion" component={Question} ></Route>
        <Route path="/question" component={QuestionFinished}></Route>
      </Switch>
    </BrowserRouter>

  )
}
export default App;