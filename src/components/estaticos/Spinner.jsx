import { CircleLoader } from 'react-spinners';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    minHeight: '200px',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    color: '#39f2ae',
   
  },
};

const Spinner = () => (
  <div style={styles.container}>
    <CircleLoader size={200} color="#39f2ae" />
     <p style={styles.text}>Cargando...</p>
  </div>
);


export default Spinner