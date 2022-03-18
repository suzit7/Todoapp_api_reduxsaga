import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <>   
        <div style={{textAlign : 'center'}}>
<NavLink to ="/app2">TODO-REDUX</NavLink>
<NavLink to ="/">REDUX-SAGA</NavLink>
<NavLink to="/app1">TODO-API</NavLink>
</div>
     </>
    );
}
export default Menu;