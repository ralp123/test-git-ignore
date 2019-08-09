import React from 'react';

class ConditionRendering extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let messagebutton;
        let button;
        let message;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
            message = 'Your are login!.';      
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
            message = 'Your are not login!.';
        }

        return (
            <div>
                <h3>Conditional Rendering</h3>

                <div>
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                    <br /><br />
                    {message}

                    <br />
                    <br />
                    <p>Example of Inline if else</p>
                    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                </div>
            </div>
        );
    }
}

function UserGreeting(props) {
        return <h4>Welcome back!</h4>;
}
  
function GuestGreeting(props) {
        return <h4>Please sign up.</h4>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
  
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default ConditionRendering;