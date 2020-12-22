import React from 'react';
import './Login.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';



function Login(props) {



    return (
        <Auxillary>
            <div className="ui form">
                <div className="mini fields">
                    <div className="field">
                        <label>UserName</label>
                        <input type="text" placeholder="UserName" onChange={props.change} value={props.val} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    
                </div>
            </div>
        </Auxillary>



    );

};

export default Login;