import React from "react";
// we use className to add classes for Bootstrap styling
 const Square = ({color}) => {
   console.log(color);
  const styles1= {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: color,
    display: 'inline-block',
  }
  return (
    <div style={styles1}></div>
)
 }

Square.defaultProps={
  color: "yellow"
}
export default Square;



