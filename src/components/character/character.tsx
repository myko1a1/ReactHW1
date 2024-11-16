import React, {FC, ReactNode} from 'react';
import './Character.css';

interface IProps {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image?: string;
    children?: React.ReactNode;
}

const Character: FC<IProps> = (Props) => {
    let {children, status, name, species, type, gender, image} = Props;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>species: {species}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={image} alt={name}/>
            {
                children
            }
        </div>
    );
};

export default Character;