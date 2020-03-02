import React from "react";
// we use className to add classes for Bootstrap styling
 
const People = ({names}) => (
   names ? (<ul className="pagination">
    { /* use map to output an <li> for each */ } 
    { /* item in the array */ }
    { names.map((name, index) => (
    <li className="page-item" key={ index }>{name} </li>
    ))} </ul>) : <p>Nothing to see here</p>

);
export default People;



