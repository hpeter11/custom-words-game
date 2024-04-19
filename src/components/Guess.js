import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Guess({ isGuessed, guess, word}) {
    const { mode, themes } = useContext(ThemeContext);
    return ( 
        <div className="grid grid-cols-5 gap-2 mb-2">
            {new Array(5).fill(0).map((_, i) => {
                const bgColor = !isGuessed ? themes[mode].background : 
                                guess[i] === word[i] ? 'bg-green-400' : 
                                word.includes(guess[i]) ? 'bg-yellow-400' : 
                                themes[mode].background;
                return (
                    <div key={i} className={`h-16 w-16 border-2 border-gray-400 ${bgColor} font-bold uppercase ${themes[mode].text} flex items-center justify-center`}>
                        {guess[i]}
                    </div>
                );
            })}
        </div>
    );
}

export default Guess;