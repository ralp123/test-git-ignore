import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {testNumber: 1};
    }

    componentDidMount() {
        this.number = setInterval(
            () => this.increment(),
            1000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.number);
    }
    
    increment() {

        this.setState((state, props) => ({
            testNumber: state.testNumber + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Example Running #</h1>
                <h2>Number: {this.state.testNumber}</h2>
            </div>
        );
    }
}

export default Clock;