// limpiar el input del chat y ejecutar el scroll
export const scrollChat = (txtMnesaje, nombreclase) => {
  document.getElementById(`${txtMnesaje}`).value = "";
  setTimeout(function () {
    document.querySelector(`${nombreclase}`).scrollTop = 6000;
  }, 100);
};
