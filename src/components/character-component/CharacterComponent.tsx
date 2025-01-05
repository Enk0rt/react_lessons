import {FC, ReactNode} from 'react';
import {ISimpsons} from "../../models/ISimpsons.ts";

export type Character = {
    character:ISimpsons,
    children:ReactNode,
}

const CharacterComponent:FC<Character> = ({character,children}) => {
    return (
        <div className='flex items-center flex-col'>
            <h2 className='text-2xl font-bold mt-2'>{character.name} {character.surname} {character.age}</h2>
            <img src={character.photo} alt={character.name}/>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;