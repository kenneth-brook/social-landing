import React from "react";

function Header(props) {
    const doit = props.passData[0];
    return (
        <div>
            <h1>Welcome to the social conection hub of:</h1>
            <h1>{doit.fName} {doit.lName}</h1>
        </div>
    );
}

export default Header;