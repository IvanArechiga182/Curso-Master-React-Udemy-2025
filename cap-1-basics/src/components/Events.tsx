function Events() {
  const handleClickOnce = () => {
    console.log("Clicks");
  };

  const handleDoubleClick = () => {
    console.log("Doble click!");
  };

  const handleMouseEnter = () => {
    console.log("Entraste al input!");
  };

  const handleMouseLeave = () => {
    console.log("Saliste del input!");
  };

  return (
    <div>
      <h1>Eventos basicos en React</h1>
      {/*Evento click */}
      <button onClick={handleClickOnce}>Click y ve consola</button>
      {/*Evento click doble */}
      <button onDoubleClick={handleDoubleClick}>
        Doble click y ve consola
      </button>
      <input
        type="text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        placeholder="Coloca el mouse aqui!"
      />
    </div>
  );
}

export default Events;
