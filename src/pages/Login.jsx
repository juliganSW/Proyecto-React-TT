import React, {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './stylesLogin.css'
import llave_color from '../assets/llave_color.png'
import { useAuth } from '../context/AuthContext'



const Login = () => {
  const { setIsAuth } = useContext(CartContext)
  const { 
  email, setEmail,
  password, setPassword,
  handleSubmit,
  error
 } = useAuth();

//{errors.email && <p className="error">{errors.email}</p>}
  
  // const { setIsAuth } = useContext(CartContext);
 
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState({});
   const navigate = useNavigate();

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let validationErrors = {};
  //   if (!email) validationErrors.email = 'Email es requerido';
  //   if (!password) validationErrors.password = 'Password es requerido';

  //   if (Object.keys(validationErrors).length > 0) {
  //     setError(validationErrors);
  //     return;
  //   }

  //   try {
  //     const res = await fetch('/data/users.json');
  //     const users = await res.json();

  //     const foundUser = users.find(
  //       (user) => user.email === email && user.password === password
  //     );

  //     if (!foundUser) {
  //       setError({ email: 'credenciales invalidas' });
  //     } else {
  //       console.log('User role:', foundUser.role);
        
  //       if (foundUser.role === 'admin') {
  //         setIsAuth(true);
            
  //         navigate('/admin');
  //       } else {
  //         navigate('/');
  //       }
  //     }
  //   } catch (err) {
  //     console.error('Error fetching users:', err);
  //     setError({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
  //   }
  // };
  
 

  return (
     <div className='login-container'>
      <form onSubmit={handleSubmit} className="form">
        <img src={llave_color} alt='imagen llave' />
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            {error.email && <p className="error-message">{error.email}</p>}


          
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            {error.password && <p className="error-message">{error.password}</p>}
          
        </span>
        <input className="submit" type="submit" value="LOG IN" />
      </form>
    </div>
  )
}

export default Login
