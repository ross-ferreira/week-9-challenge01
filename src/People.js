import React from "react";
// we use className to add classes for Bootstrap styling
 
let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
const People = () => (
    <ul className="pagination">
    { /* use map to output an <li> for each */ } 
    { /* item in the array */ }
    { names.map((name, index) => (
    <li className="page-item" key={ index }>{name} </li>
    ))} </ul>

);
export default People;



