import React from "react";
// we use className to add classes for Bootstrap styling
 
const Basket = ({items}) => (
    <table className="table">
        <thead>
        <tr><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
            { items.map((a, i) => (
            <tr key={ i }><td>{ a.name }</td><td>{ a.price }</td></tr>
            ))} 
        </tbody>
    </table> 

);
export default Basket;

