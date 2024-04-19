import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';
import Guess from './components/Guess';
import Mode from './components/Mode';

function App() {
  const { mode, themes } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col h-full items-center justify-center ${themes[mode].background} ${themes[mode].text}`}>
      <h1 className='mb-10'>Wordle</h1>
      <Mode />
      {new Array(6).fill(0).map((_, i) => (
        <Guess key={i} isGuessed={'true'} guess={'guess'} word={'tests'} mode={mode} />
      ))}
    </div>
  );
}

export default App;
