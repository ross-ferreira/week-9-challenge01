import React from "react";
// import Link from ReactRouter


import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";


const LinkList = () => {
    let links = [
        {name: "Paragraph", link:"/paragraph"},
        {name: "List", link: "/list"},
        {name: "Square", link: "/square"},
        {name: "People", link: "/people"},
        {name: "length", link: "/length"},
        {name: "Adder", link: "/Adder"},
        {name: "Basket", link: "/basket"},
        {name: "Clicked", link: "/clicked"},
        {name: "Counter", link: "/counter"},
        {name: "Step Counter", link: "/step_counter"},
        {name: "Catch Me If You Can", link: "/catch_me_if_you_can"},
        {name: "Roll Call", link: "/roll_call"},
        {name: "Colours", link: "/colours"},
        {name: "Dice", link: "/dice"},
        {name: "Password Strength", link: "/password_strength"}
      ];

      // created an Array to easily populate links below for Component Pages
    return (
    <ul className="page-footer font-small blue pt-4">
        {links.map((item, index) => (
        <li className="page-item" key={ index }>
            <Link to={item.link}>{item.name}</Link>
        </li>
        ))}

    </ul> )};

export default LinkList;


