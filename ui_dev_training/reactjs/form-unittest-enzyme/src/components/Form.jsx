import React from "react";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '', 
            lastname: '', 
            subscribed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]: value}, () => {
            console.log(this.state[name])
        })
    }

    handleSubmit() {
        var subscribed = this.state.subscribed ? 'yes' : 'no';
        alert(`firstname: ${this.state.firstname}`);
    }


    render() {
        // let languages = ['english', 'spanish', 'germany', 'japanes'];
        return(
            <form name="frm" onSubmit={this.handleSubmit}>
                <TextInput labelFor="firstname" label="firstname" className="form-control" type="text" name="firstname" id="firstname" value={this.state.firstname} handleChange={this.handleChange} />

                <TextInput labelFor="lastname" label="lastname" className="form-control" type="text" name="lastname" id="lastname" value={this.state.lastname} handleChange={this.handleChange} />

                <CheckBox labelFor="subscribed" label="subscribed" handleChange={this.handleChange} Checked={this.state.subscribed} className="form-check mb-3 text-right" />
                
                <Button type="submit" className="btn btn-primary"> submit </Button>
            </form>
        )
    }
}


export default Form;