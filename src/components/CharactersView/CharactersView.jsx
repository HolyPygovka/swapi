export const CharactersView = ({ characters, handleCharacterClick }) => {
    const listItems = characters.map((char, index) => 
        <li key={index} onClick={() => handleCharacterClick(char)}>
            {char.name}
        </li>
    );

    return(
        <div className='CharactersView'>
            <h3>Characters</h3>
            <ul>{listItems}</ul>
        </div>
    );
}