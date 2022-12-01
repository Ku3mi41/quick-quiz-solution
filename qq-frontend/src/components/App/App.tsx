import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import '@fontsource/roboto';
import '@picocss/pico/css/pico.min.css';

import RoutedQuiz from '../routed/RoutedQuiz';
import ContrastSwitcher from '../contrastSwitcher';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <div>QuickQuiz helps you to test your knowledge</div>
          </Route>
          <Route path="/quiz/:quizId">
            <RoutedQuiz />
          </Route>
          <Route path="/">
            <div>Quick Quiz - система быстрого тестирования</div>
          </Route>
        </Switch>
      </Router>
      <ContrastSwitcher />
    </>
  );
}

export default App;
