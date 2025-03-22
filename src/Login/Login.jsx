import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/top-view-arrangement-with-salad-boxes-sauce_23-2148247882.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className='container shadow bg-light p-4' style={{ width: '30%', borderRadius: '10px' }}>
        <h2 className='text-center'>Login</h2>
        <form>
          <div className='form-group p-3'>
            <label>Enter Username:</label>
            <input type='text' name='username' className='form-control' />
          </div>

          <div className='form-group p-3'>
            <label>Enter Password:</label>
            <input type='password' name='password' className='form-control' />
          </div>

          <button type='submit' className='btn btn-success d-flex mx-auto'>Login</button>
        </form>

        <p style={{ paddingBottom: 20, paddingLeft: 50, paddingTop: 20 }}>
          <b>Don't have an account?</b> <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}
