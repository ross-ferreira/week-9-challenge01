import React from "react";
// we use className to add classes for Bootstrap styling
 const Header = ({text}) => (
  <header class="jumbotron">
    <h1>{text}</h1>
  </header>
);
export default Header;

