import { Route, Routes } from 'react-router-dom'
import './global.css'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import AuthLayouth from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

function App() {


  return (
    <>
   <main className=' flex h-screen'>
    <Routes>
      {/* PUBlic ROUTES */}
      <Route element={<AuthLayouth/>}>
       <Route path='/sign-in' element={<SigninForm/>}/>
       <Route path='/sign-up' element={<SignupForm/>}/>
      </Route>
      

      {/* PRIVATE ROUTES */}
      <Route element={<RootLayout/>}>

      </Route>
      <Route index element={<Home/>}/>



    </Routes>
    
   </main>
      
    </>
  )
}

export default App
