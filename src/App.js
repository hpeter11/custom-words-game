import React from 'react';
import Guess from './components/Guess';

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-800 text-white">
      <h1>Wordle</h1>
      <Guess isGuessed={'true'} guess={'guess'} word={'tests'} />
    </div>
  );
}

export default App;
