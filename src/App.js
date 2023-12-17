// import React from 'react'
// import './App.css'
// import { useState } from 'react'

// const App = () => {

// let [login,setLogin]=useState('login')

//   return (

//     <div className='container'>
//       <div className='lform'>
//         <div>
//           <h2 >{login}</h2>
//         </div>
//         <div>
//           <input type='text' placeholder='Enter username'></input>
//         </div>
//         <div>
//           <input type='password' placeholder='password'></input>
//         </div>
//         <div>
//           <p><a href='#'>Forgot your password</a></p>
//         </div>
//         <div className='btn '>
//           <button onClick={()=>setLogin("signup")}>sign up</button>
//           <button onClick={()=>setLogin("login")}>login</button>


          
//         </div>
//       </div>
//     </div>


//   )
// }

// export default App


import Loginform from './Components/Loginform'
import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <Loginform />
    </div>
  )
}

export default App
