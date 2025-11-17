import React from 'react'
import {Login as LoginComponent} from '../Components/Login/Login'
import Container from '../Components/container'
function Login() {
  return (
    <div className='py-8 min-h-screen'>
      <Container>
        <LoginComponent/>
      </Container>        
    </div>
  )
}

export default Login