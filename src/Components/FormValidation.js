import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


const FormValidation = (props) => {
    const {
        email,
        setEmail, 
        password ,
        setPassword,
        HandleLoguin,
        HandleLogout,
        HandleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (   
        <section className='section-container'>
            
            <div className='container'>
                <div className='container-data'>

                    <label>Username</label><br></br>
                    <input
                        className='controls'
                        type='email'
                        value={email}
                        placeholder='Write your email'
                        onChange={(e) => setEmail(e.target.value)}
                    /><p>{emailError}</p>

                    <label>Password</label><br>
                    </br>
                    <Input
                      id="standard-adornment-password"
                      className='controls'
                      type={values.showPassword ? 'text' : 'password'}
                      value={password}
                      placeholder='Write your password'
                      onChange={handleChange('password')}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            
                            
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                        }
                    /><p>{passwordError}</p>
                </div>

                <div className='container-btn'>
                    {hasAccount ? (
                        <>
                        <button onClick={HandleLoguin}> Sign In</button>
                        
                        <p>Dont have account <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>

                    ) : (
                        <>
                        <button onClick={HandleSignup}>Sign up</button>
                        <p>Have an account <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}

                </div>

            </div>

        </section>
    )
}

export default FormValidation
