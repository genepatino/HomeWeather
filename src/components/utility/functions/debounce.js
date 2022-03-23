function debounce(funcion, time) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const context = this;
    const args = arguments;
    timeoutId = setTimeout(() => {
      funcion.apply(context, args);
    }, time);
  };
}

export default debounce;
