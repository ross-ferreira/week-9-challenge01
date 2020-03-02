import React, { Children } from "react";
// we use className to add classes for Bootstrap styling
 const Paragraph = ({children}) => (
   <p>{!children ? null :
    <p>{children}</p>}
    </p>
);
export default Paragraph;




 