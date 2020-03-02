import React from "react";
// we use className to add classes for Bootstrap styling
 const Header = ({children}) => (
  <header class="jumbotron">
    <h1>{children}</h1>
  </header>
);
export default Header;

