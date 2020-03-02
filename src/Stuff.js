import React from "react";
// we use className to add classes for Bootstrap styling

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

 const Stuff = () => (
<React.Fragment>
    <Header/>
    <Paragraph/>
    <Square/>
    <People/>
</React.Fragment>
);
export default Stuff;