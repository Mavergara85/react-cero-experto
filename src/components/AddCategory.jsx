import { useState } from 'react';

export const AddCategory = ({ onNewCategory, onResetCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length <= 1) return;

    onNewCategory(newValue);
    setInputValue('');
  };

  const handleReset = () => {
    setInputValue('');
    onResetCategories(); // Limpia todas las categorías

    onNewCategory('One Punch'); // Agrega una categoría por defecto
  };


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />

      <button className="boton-animado" type="button" onClick={handleReset}>
        Limpiar
      </button>
    </form>
  );
};
