function PaginationButtons({ currentId, onNavigate }) {
  const randomId = () => Math.floor(Math.random() * 898) + 1;

  return (
    <div>
      <button onClick={() => onNavigate(currentId - 1)}>Anterior</button>
      <button onClick={() => onNavigate(randomId())}>Aleatorio</button>
      <button onClick={() => onNavigate(currentId + 1)}>Siguiente</button>
    </div>
  );
}

export default PaginationButtons;