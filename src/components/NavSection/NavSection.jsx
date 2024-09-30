import { useEffect, useState } from "react";
import { getResources } from "./services";

const NavSection = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async () => {
            const resources = await getResources();
            setResources(resources);
        })();
    }, []);

    const listItems = resources.map((res, index) => 
        <li key={index}>
            {res}
        </li>
    );

    return(
        <nav className = "NavSection">
            <ul>
                {listItems}
            </ul>
        </nav>
    );
};

export default NavSection;