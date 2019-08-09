import React from 'react';

class Numbers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {num: 1};
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
            num: state.num + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Count !</h1>
                <h2>It is {this.state.num}.</h2>
            </div>
        );
    }
}

export default Numbers;