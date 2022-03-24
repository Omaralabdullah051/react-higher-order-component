import React from "react";
import withCounter from "../HOM/withCounter";

const HoverCounter = (props) => {
    const { count, handleEvent } = props;
    return (
        <div>
            <h2 onMouseOver={handleEvent}>Hovered {count} times</h2>
        </div>
    )
}

export default withCounter(HoverCounter);