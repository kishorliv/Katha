import React from 'react';

import './style.css';
import { Card } from '../Card';


const Story = ({ img, title, text, linkToRead, linkToEdit, linkToDelete }) => {
    return(
        <Card img={img} title={title} text={text} linkToRead={linkToRead} linkToEdit={linkToEdit} linkToDelete={linkToDelete} />
    );
};

export { Story };
