import React from "react";
// we use className to add classes for Bootstrap styling

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';
import FadeIn from './FadeIn';
import Clicked from './Clicked';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import Colours from './Colours';
import Dice from './Dice';
import LameGame from './LameGame';
import Length from './Length';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import List from './List';
import Adder from './Adder';
import Transform from './Transform';


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

 const Stuff = ({square}) => (
<React.Fragment>
    <Header>Hello Rosssss</Header>
    <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos
    </Paragraph>
    <FadeIn animationDuration="500ms">Fadinnnnngggggg</FadeIn>
    <Square color="red"/>
    <Square />
    {/* Please note the Difference, the default checks to see if the property exsists and if it does and has no value it will push through what the default value is, in this case yellow */}
    <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    <Basket items={ items }/>
    <Clicked>Not Clicked</Clicked>
    <Counter initial={ 50 } max={ 100 }/>
    <StepCounter max={ 100 } step={ 5 } />
    <br></br>
    <CatchMeIfYouCan jump={ 100 }/>
    <RollCall names={ names }></RollCall>
    <br></br>
    <Colours colours={ colours }/>
    <br></br>
    <Dice sides={ 6 }/>
    <br></br>
    <LameGame aim={ 10000 }/>
    <Length/>
    <PasswordStrength label={"Gimmmme ya Password"}/>
    <TempConverter label={"F to C Converter"}/>
    <List/>
    <Adder/>
    <Transform transform={x => x * x }/>
</React.Fragment>
);
export default Stuff;


Stuff.defaultProps = {
    square: true,
};