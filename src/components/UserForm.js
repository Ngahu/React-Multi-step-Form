import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            occupation:'',
            bio:'',
            city:'',

        }

    }


    //Proceed to the next step
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step +1
        })
    }

     //go to the previous step
     previousStep = () =>{
        const { step } = this.state
        this.setState({
            step: step -1
        })
    }

    //handle fields change
    handleChange = input =>e =>{
        this.setState({[input]:e.target.value})
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

UserForm.propTypes = {

};

export default UserForm;