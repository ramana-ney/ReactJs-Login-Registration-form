import React from 'react'
import { useState } from 'react'

const Loginform = () => {

let [action,setAction]=useState('login')


    return (
        <div className='sign-up'>
            <div className='lists'>

                <h2>{action}</h2>

                <input type='text' placeholder='Enter username'></input>
               {action=="login"? <div></div>:<input type='email' placeholder='Enter Email' ></input>} 
                <input type='password' placeholder='Enter password'></input>

                <a href='#'>forgot your password?</a>

                <div className='btn'>
                    <button onClick={()=>{
                        setAction('login')
                    }}>login</button>
                    <button onClick={()=>{
                        setAction('sign up')
                    }}>sign up</button>
                </div>

            </div>
        </div>
    )
}

export default Loginform
