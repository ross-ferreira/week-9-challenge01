import React, { Component } from "react";
// we use className to add classes for Bootstrap styling

 class Paragraph extends Component {
  
  render() {
    const {children} =this.props;
  
  
    return (
    <>{!children ? null :<p>{children}</p>}
    </>

);}
}
export default Paragraph;

 