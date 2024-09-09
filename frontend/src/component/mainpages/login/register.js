import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = ()=>{
    const [user , setUser] = useState({
        name:'',
        email:'',
        password:''
    })
    const onChangeInput = e=>{
        const {name , value} = e.target;
        setUser({...user,[name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
          await axios.post('/user/register',{...user}) 
          localStorage.setItem('firstLogin', true) 
          window.location.href="/"
        } catch (err) {
            alert(err.response.data.msg)

        }
    }
    return(

        <div className='register-page'>
            <form onSubmit={registerSubmit}>
            <input type='text' name='name' required placeholder='Name' value={user.name} onChange={onChangeInput}/>
                <input type='email' name='email' placeholder='Email' value={user.email} required onChange={onChangeInput}></input>
                <input type='password' name='password' placeholder='Password' value={user.password} required onChange={onChangeInput}></input>

                <div className='row'>
                    <button type='submit'>Register</button>
                    <Link to ='/login'>Login</Link>

                </div>
            </form>

        </div>
    )
}

export default Register