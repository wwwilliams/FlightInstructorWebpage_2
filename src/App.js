import React, { Component } from 'react';
import './App.css';
import Register from './Components/Register/Register';
import firebase, { auth, provider } from './firebase.js';
import Button from './Components/Button/Button';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';


class App extends Component {
    constructor() {
        super();
        this.state = {
            
            user: null
        }
        this.firstNameChange = this.firstNameChange.bind(this);
        this.middleNameChange = this.middleNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        
            
    };

    firstNameChange(event) {
        this.props.firstNameDispatch(event.target.value);
        event.preventDefault();
    }

    middleNameChange(event) {
        this.props.middleNameDispatch(event.target.value);
        event.preventDefault();
    }

    lastNameChange(event) {
        this.props.lastNameDispatch(event.target.value);
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
        const itemsRef = firebase.database().ref('names');
        const item = {
            user:
                this.props.firstName + ' '
                + this.props.middleName + ' '
                + this.props.lastName
        }
        itemsRef.push(item);
        this.setState({
            user: true
        })
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(result);
                this.setState({
                    user
                });
            });
    }

    
     
    render() {
        return (
            <div className="App">
                
                
                
                
                
                {this.state.user ?
                    <div>
                    <div>
                            <Button placement={{ position: 'absolute', top: '8px', right: '16px' }} submit={this.logout} function="Logout" />
                    </div>
                    <div>
                            <img style={{ position: 'absolute', bottom: '8px', right: '16px'}} src={this.state.user.photoURL} />
                        </div>
                    </div>
                    
                    :
                    <div>
                        <Register firstNameChange={this.firstNameChange}
                            middleNameChange={this.middleNameChange}
                            lastNameChange={this.lastNameChange}
                            first={this.props.firstName}
                            middle={this.props.middleName}
                            last={this.props.lastName} />
                        
                            <Button submit={this.handleSubmit} function="Register" />
                        
                    <Login />
                        <Button submit={this.login} function="Login" />
                        </div>
                }
                  
            </div>
        );
    };

}

function mapStateToProps(state) {
    return {
        firstName: state.firstName,
        middleName: state.middleName,
        lastName: state.lastName
    }
}


function mapDispatchToProps(dispatch) {
    return {
        firstNameDispatch: (firstName) => {
            dispatch({ type: "FIRST_NAME", payload: firstName })
        },
        middleNameDispatch: (middleName) => {
            dispatch({type: "MIDDLE_NAME", payload: middleName})
        },
        lastNameDispatch: (lastName) => {
            dispatch({type: "LAST_NAME", payload: lastName})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
