import React from "react";
import withCounter from "../HOM/withCounter";

const ClickEvent = (props) => {
    const { count, handleEvent } = props;
    return (
        <div>
            <button onClick={handleEvent}>Click {count} times</button>
        </div>
    )
}

export default withCounter(ClickEvent);