import React from "react";
import Header from "../header/Header";
import {data} from "../../data/data";

function DisplayBody() {
    return (
        <div className="displayBody">
            <Header passData={data}/>
        </div>
    );
} 

export default DisplayBody;