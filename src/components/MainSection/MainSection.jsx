import { useEffect, useState } from "react";
import { CharactersView } from "../CharactersView/CharactersView";
import { DetailView } from "../DetailView/DetailView";
import { getCharacters } from "./services";
import { sections } from "./enum";

// !info! try lifting state up
export const MainSection = () => {
    const [activeSection, setActiveSection] = useState(sections.CHARACTERS);
    const [characters, setCharacters] = useState([]);
    const [detailInfo, setDetailInfo] = useState([]);
    const [selectedItemId, setselectedItemId] = useState(0);

    useEffect(() => {
        (async () => {
            const characters = await getCharacters();
            setCharacters(characters);
        })();       
    }, []);

    const handleCharacterClick = (data) => {
        setDetailInfo(data);
        setselectedItemId(data.id);
    }

    return(
        <main className='MainSection'>
            <p>Main section</p>
            {activeSection === sections.CHARACTERS &&
                <CharactersView
                    characters={characters}
                    handleCharacterClick={handleCharacterClick}
                />
            }
            
            <DetailView
                id={selectedItemId}
                detailInfo={detailInfo}
                activeSection={activeSection}
            />
        </main>
    );
}