export default function Guess({ isGuessed, guess, word}) {

    return ( 
        <div className="grid grid-cols-5 gap-1">
            {new Array(5).fill(0).map((_, i) => (
                <div>{guess[i]}</div>
            ))}
        </div>
    )

}