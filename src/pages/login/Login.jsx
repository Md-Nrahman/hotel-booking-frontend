import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'

const Login = () => {

    const [credentials, setCredentials] = useState({username: "", password: ""})

    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleClick=async(e)=>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res=await axios.post("https://hotel-booking-backend-express.herokuapp.com/api/auth/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
        }
    }
  return (
    <div className='login'>
        <div className='lContainer'>
        <input type="text" placeholder="username" id="username" onChange={(e)=>setCredentials(prev=>({...prev, username:e.target.value}))} className="lInput" />
            <input type="password" placeholder="password" id="password" onChange={(e)=>setCredentials(prev=>({...prev, password:e.target.value}))} className="lInput" />
            <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
            {error && <span style={{color:"red"}}>Something went wrong</span>}
        </div>
    </div>
  )
}

export default Login