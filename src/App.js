
import React, { Fragment } from "react";
// import the ReactRouter components
import {
  BrowserRouter as Router, Route, Switch,} from "react-router-dom"; 

  import './App.css';
import FourOhFour from './FourOhFour';
import Header from "./Header";
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Length from './Length';
import Adder from './Adder';
import List from './List';
import Basket from './Basket';
import Clicked from './Clicked';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import Colours from './Colours';
import Dice from './Dice';
import LameGame from './LameGame';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import Footer from './Footer';
import Progress from './Progress';


let items = [
  { name: "Coffee", price: 2.10 },
  { name: "Bananas", price: 3.50 },
  { name: "Milk", price: 250.65 },
  { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

let names = ["James","Harry","Ross","Ben","Peter","Tom","Wiley"];

let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];


// wrap the entire app with the <Router> component
// this is simply using the children prop under the hood
const App = () => (
   <Router>
      <Header subtitle="Space Wombats">Ross's Routes Update</Header>
      <Switch>
        <Route exact path="/paragraph">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos
          </Paragraph>
        </Route>
        <Route path="/square/:id" render={({ match }) => ( <Square square={ match.params.id } />)} />
        <Route exact path= "/people">
          <People  names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
        </Route>
        <Route exact path="/length" component={ Length }/>
        <Route exact path="/adder" component={ Adder }/>
        <Route exact path="/list" component={ List }/>
        <Route exact path= "/basket">
          <Basket items={ items }/>
        </Route>
        <Route exact path= "/clicked">
          <Clicked>Not Clicked</Clicked>
        </Route>
        <Route exact path= "/counter">
          <Counter initial={ 50 } max={ 100 }/>
        </Route>
        <Route exact path= "/step_counter">
          <StepCounter  max={ 100 } step={ 5 }/>
        </Route>
        <Route exact path= "/catch_me_if_you_can">
          <CatchMeIfYouCan  jump={ 100 }/>
        </Route>
        <Route exact path= "/roll_call">
          <RollCall names={ names }/>
        </Route>
        <Route exact path= "/colours">
          <Colours  colours={ colours }/>
        </Route>
        <Route exact path= "/dice">
          <Dice  sides={ 6 }/>
        </Route>
        <Route exact path= "/lame_game">
          <LameGame  aim={ 10000 }/>
        </Route>
        <Route exact path= "/password_strength">
          <PasswordStrength  label={"Gimmmme ya Password"}/>
        </Route>
        <Route exact path= "/temp_converter">
          <TempConverter  label={"F to C Converter"}/>
        </Route>
        <Route exact path="/progress" component={ Progress }/>
        <FourOhFour/>
      </Switch>
      <Footer/>
</Router> );
export default App;




