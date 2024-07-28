import React, {Fragment} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AvailableMeals from './components/Meals/AvailableMeals';
import './App.css';  


function App() {
  return (
    <Fragment>
      <Header />
      <main>
       <Meals/>
       <AvailableMeals/>
      </main>
     
    </Fragment>
     
     
    
  );
}

export default App;
