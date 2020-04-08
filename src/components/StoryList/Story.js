// import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import LogoImage from '../../assets/icons/logo.png';
// import './style.css';

// const Story = ({ title, contentHtml}) => {
//     return(
//             <Link to={`/stories/${title}`}>
//                 <div className="card-wrapper">
//                     <Card>
//                         <Card.Img variant="top" src={LogoImage} />
//                         <Card.Body>
//                             <Card.Title>{title}</Card.Title>
//                             <Card.Text>{title}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Link>
//     );
// };

// export { Story };

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import LogoImage from '../../assets/icons/logo.png';
import './style.css';

const Story = ({ title, contentHtml}) => {
    return(
            <Link to={{
                pathname: `/stories/${title}`,
                state: {
                    title: title
                }
                }}>
                <div className="card-wrapper">
                    <Card>
                        <Card.Img variant="top" src={LogoImage} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{title}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Link>
    );
};

export { Story };
