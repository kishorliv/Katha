import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, title, text, linkTo }) => {
    return(
        <div className="col-lg-4 mb-4">
            <div className="card">
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={linkTo} >
                        <div className="btn btn-outline-danger btn-sm">
                            Read more
                        </div>
                    </Link>
                </div>
            </div>
        </div>    
    );
};

export { Card }
