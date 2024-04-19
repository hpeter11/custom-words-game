import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Mode() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-5"
      onClick={toggleMode}
    >
        {mode === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}

export default Mode;