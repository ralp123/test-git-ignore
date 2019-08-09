import React from 'react';

class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
    }

    componentDidMount() {
       
    }
  
    componentWillUnmount() {
    
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleClick1 = () => {
        console.log('this is:', this);
    }

    handleClick2() {
        console.log('this is:', this);
      }
    

    render() {
        return (
            <div>
                <h3>Handling Event</h3>

                <label>Toggle Buttons</label>
                
                <br/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>

                <br/>
                <br/>
                --------
                <br/>
                <button onClick={this.handleClick1}>
                    Click
                </button>

                <br/><br/>
                ========
                <br/>
                <button onClick={this.handleClick1}>
                    Click
                </button>

                <br/ >
                <br/ >
                <ActionLink  />
            </div>
        );
    }
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
    }
    
    return (
        <a href="#" onClick={handleClick}>
        Click me
        </a>
    );
}

export default HandlingEvents;