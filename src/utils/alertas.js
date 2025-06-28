import Swal from 'sweetalert2'

const baseStyles = {
  showConfirmButton: false,
  timer: 1500,
  background: "#282f44",
  color: "#fff",
  customClass: {
    popup: 'custom-alert'
  },
  iconColor: "#39f2ae"
}

export const alertaSuccess = (mensaje = '¡Acción exitosa!') => {
  Swal.fire({
    ...baseStyles,
    icon: 'success',
    title: mensaje,
    //position: 'top-end'
  });
};

export const alertaError = (mensaje = 'Ocurrió un error') => {
  Swal.fire({
    ...baseStyles,
    icon: 'error',
    title: mensaje,
    //position: 'top-end',
    iconColor: '#ff4d4d'
  });
};

export const alertaConfirmacion = (mensaje = '¿Estás seguro?', callback) => {
  Swal.fire({
    title: mensaje,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar',
    background: "#282f44",
    color: "#fff",
    iconColor: "#ffaa00",
    customClass: {
      popup: 'custom-alert'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
};
