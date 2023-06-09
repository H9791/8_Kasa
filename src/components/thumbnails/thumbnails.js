import React from 'react';
import './thumbnails.css';
import Thumb from '../thumb/thumb';
import logements from '../../assets/logements.json';

export default function Thumbnails() {
    //iterate over logements.json and show all the thumbnails
    let thumbnails = logements.map((logement, index) => {
       return <Thumb logement={logement} id={logement.id} key={logement.id}/>
    })

    return (
        <main id="main">
            {thumbnails}
        </main>
    );
}