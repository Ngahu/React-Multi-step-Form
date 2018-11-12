import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class FormUserDetails extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)

    }

    
    continue =e => {
        e.preventDefault();
        this.props.nextStep();

    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter user details"/>

                <TextField
                 hintText="Enter your first name"
                 floatingLabelText="First Name"
                 onChange={handleChange('firstName')}
                 defaultValue={values.firstName}
                />
                <br/>
                <TextField
                 hintText="Enter your last Name"
                 floatingLabelText="last Name"
                 onChange={handleChange('lastName')}
                 defaultValue={values.lastName}
                />

                <br/>
                <TextField
                 hintText="Enter your email"
                 floatingLabelText="email"
                 onChange={handleChange('email')}
                 defaultValue={values.email}
                />

                <br/>

                <RaisedButton 
                 label="Continue"
                 primary={true}
                 style={styles.button}
                 onClick={this.continue}
                />


                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

FormUserDetails.propTypes = {

};


const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails;