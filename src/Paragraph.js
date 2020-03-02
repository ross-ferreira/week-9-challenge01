import React from "react";
// we use className to add classes for Bootstrap styling
 const Paragraph = ({message}) => (
   <p>{!message ? null :
    <p>{message}</p>}
    </p>
);
export default Paragraph;




 