import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormUserDetails from './FormUserDetails';



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

        const {step } = this.state;
        const {firstName, lastName, email, occupation, city, bio } = this.state
        const values = {firstName, lastName, email, occupation, city, bio }
        
        switch(step){
            case 1:
                return (
                    <FormUserDetails
                     nextStep={this.nextStep}
                     handleChange={this.handleChange}
                     values={values}
                    />
                )
            
            case 2:
                return (<h1>hello step 2 </h1>)
            
            case 3:
            return (<h1>hello step 3 confirm </h1>)

            case 4:
            return (<h1>hello step 4 success </h1>)




                

        }
    }
}

UserForm.propTypes = {

};

export default UserForm;