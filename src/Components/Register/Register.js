import React from 'react';
import './Register.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';



function Register(props) {
    

    
        return (
            <Auxillary>
                <div className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <label>First name</label>
                            <input type="text" placeholder="First Name" onChange={props.firstNameChange} value={props.first}/>
                        </div>
                        <div className="field">
                            <label>Middle name</label>
                            <input type="text" placeholder="Middle Name" onChange={props.middleNameChange} value={props.middle} />
                        </div>
                        <div className="field">
                            <label>Last name</label>
                            <input type="text" placeholder="Last Name" onChange={props.lastNameChange} value={props.last} />
                        </div>
                    </div>
                </div>
            </Auxillary>



        );
    
};

export default Register;