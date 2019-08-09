import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {numbers: 1};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState((state, props) => ({
            numbers: state.numbers + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.numbers}.</h2>
            </div>
        );
    }
}

export default Numbers;