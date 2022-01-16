import React, { useState } from "react";
import Header from "../header/Header";
import DisplayCard from "../display-card/DisplayCard";
import {data} from "../../data/data";

function DisplayBody() {
    return (
        <div className="displayBody">
            <Header passData={data}/>
            { }
            <DisplayCard passData={data}/>
        </div>
    );
} 

export default DisplayBody;