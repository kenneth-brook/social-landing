import React from "react";

function Header(props) {
    const doit = props.passData[0];
    return (
        <div className="header">
            <div className="one">
                <div className="two">
                    <div className="three">
                        <div className="four">
                            <h1>Welcome to the social conection hub of:</h1>
                            <h1>{doit.fName} {doit.lName}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;