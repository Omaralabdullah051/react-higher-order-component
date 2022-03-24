import React from "react";

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { count: 0 };
        handleEvent = () => this.setState((prevState) => ({ count: prevState.count + 1 }));
        //or we can write this also
        // handleEvent = () => this.setState(({ count }) => ({ count: count + 1 }));
        render() {
            const { count } = this.state;
            return (
                <div>
                    <OriginalComponent count={count} handleEvent={this.handleEvent}></OriginalComponent>
                </div>
            )
        }
    }
    return NewComponent;
}


export default withCounter;