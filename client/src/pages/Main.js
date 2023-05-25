import React, { useEffect, useState } from'react';
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <div>
            <Link to="/">Login</Link>
            <br/>
            <Link to="/profile">Profile</Link>
        </div>
    )
}