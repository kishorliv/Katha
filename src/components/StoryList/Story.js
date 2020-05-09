import React from 'react';

import './style.css';
import { Card } from '../Card';


const Story = ({ img, title, text, linkTo }) => {
    return(
        <Card img={img} title={title} text={text} linkTo={linkTo} />
    );
};

export { Story };
