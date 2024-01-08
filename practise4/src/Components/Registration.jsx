import React from 'react'
import Input from './Input'

function registerLogin(status){
  if(status){
    return <button type="submit">Login</button>
  }else{
    return(
      <div>
          <Input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
      </div>
      
    ) 
  }
}
export default function Register(props) {
  return (
    <div>
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          {registerLogin(props.register_status)}
        </form>
    </div>
  )
}
