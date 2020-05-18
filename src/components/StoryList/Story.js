import React from 'react';

import './style.css';
import { Card } from '../Card';


const Story = ({ img, title, text, linkToRead, linkToEdit, sendTitle }) => {
    return(
        <Card 
            img={img} 
            title={title} 
            text={text} 
            linkToRead={linkToRead} 
            linkToEdit={linkToEdit} 
            sendTitle={sendTitle} 
        />
    );
};

export { Story };
