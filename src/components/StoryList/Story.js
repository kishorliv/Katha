import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from '../../assets/icons/logo.png';
import './style.css';

const Story = ({ title, text}) => {
    return(
            <div className="card-wrapper">
                <Card>
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
    );
};

export { Story };



{/* <CardColumns>
<Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Card title that wraps to a new line</Card.Title>
    <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
    </Card.Text>
    </Card.Body>
</Card>
<Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
    </p>
    <footer className="blockquote-footer">
        <small className="text-muted">
        Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
    </footer>
    </blockquote>
</Card>
</CardColumns>         */}
