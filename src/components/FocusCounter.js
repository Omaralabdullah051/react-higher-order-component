import React from "react";
import withCounter from "../HOM/withCounter";

const FocusCounter = (props) => {
    const { count, handleEvent } = props;
    return (
        <div>
            <input type="text" onFocus={handleEvent} /><span>Focused {count} times</span>
        </div>
    )
}

export default withCounter(FocusCounter);