import React, { useState, useEffect, useRef } from 'react';

function Login({
  isLoginSuccess,
  submitError,
  handleEmailChange,
  handlePwdChange,
  handleSubmit,
}) {
  const emailRef = useRef('');
  const pwdRef = useRef('');

  return (
    <div className='login'>
      {!isLoginSuccess ? submitError : null}
      <div className='login-heading'>
        <h2>Please Login</h2>
      </div>
      <div className='login-form'>
        <div className='email'>
          <label htmlFor='email'>Email : </label>
          <input
            type='email'
            id='email'
            placeholder='Email...'
            onChange={(e) => handleEmailChange(e)}
            ref={emailRef}
          />
        </div>
        <div className='pwd'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            placeholder='Password...'
            onChange={(e) => handlePwdChange(e)}
            ref={pwdRef}
          />
        </div>
        <div className='btn'>
          <button
            type='submit'
            onClick={(e) => {
              handleSubmit(e);
              emailRef.current.focus();
              emailRef.current.value = '';
              pwdRef.current.value = '';
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
