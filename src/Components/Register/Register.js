import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please register now</h2>
            <div className={{ margin: "20px" }}>
                <button>Google Sign in</button>
            </div>

            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;