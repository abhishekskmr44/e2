import React from "react";
function btn(props){
    return (
        <div className="Btn">
            <button id={props.id}>{props.name}</button>
        </div>
    )
}
export default btn