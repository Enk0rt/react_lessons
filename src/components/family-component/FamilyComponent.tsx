import CharacterComponent from "../character-component/CharacterComponent.tsx";
import {simpsons} from "../../data/simpsons.ts";
import {ISimpsons} from "../../models/ISimpsons.ts";

const FamilyComponent = () => {
    return (
        <>
            {
                simpsons.map((character: ISimpsons,index) => (
                    <CharacterComponent character={character} key={index}>
                        {character.info}
                    </CharacterComponent>
                ))
            }
        </>)
}
export default FamilyComponent;