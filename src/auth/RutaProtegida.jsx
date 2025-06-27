import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'


function RutaProtegida({ isAuthenticated, children }) {
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default RutaProtegida;
