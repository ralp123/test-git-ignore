import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }
  
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br /> <br />  <br />
                <textarea value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default NameForm;