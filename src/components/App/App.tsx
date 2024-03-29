import logo from '../../assets/logo.svg';
import './App.scss';
import Currencieslist from './currencieslist';
import currencies from './currencies';
import Fullgame from './fullgame';
import Fullgame2 from './fullgame2';
import Fullgame3 from './fullgame3';
import recipe from './recipe';
import PendingOrder from './pendingorder';
import { useState } from 'react';
import Header from './header';




function App() {

  const [buy, setBuy] = useState([]);




  let game2 = false;
  let game3 = false;
  let random = Math.random();
  console.log(random);
  if (random<0.5) { game2 = true} else { game3 = true};



  return (



    <div className="app">


  
      <div className="app-header">

      <Header recipes = {recipe} buy={buy} setBuy={setBuy} />


      </div>

      <div className="app-add">

      <div className="app1"> <Currencieslist currencieslist= {currencies} /></div>


          {game2 ?   <div className="app2">  <Fullgame2/>  </div> :  <div className="app2">  <Fullgame3/>  </div> }


        <div className="app3">  <Fullgame/>  </div>


        <div className="app4">  <PendingOrder buy={buy} setBuy={setBuy} />  </div>
 


      </div>

    </div>

 


  );
}



          
export default App;
