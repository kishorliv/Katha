import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, title, text, linkToRead, linkToEdit, sendTitle }) => {
    return(
        <div className="col-lg-4 mb-4">
            <div className="card Card-wrapper">
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={linkToRead} >
                        <div className="btn btn-outline-primary btn-sm">
                            Read more
                        </div>
                    </Link>
                    &nbsp;
                    <Link to={linkToEdit} >
                        <div className="btn btn-outline-info btn-sm">
                            Edit
                        </div>
                    </Link>
                    &nbsp;
                    <Link to='/dashboard' onClick={() => sendTitle(title)} >
                        <div className="btn btn-outline-danger btn-sm float-right">
                            Delete
                        </div>
                    </Link>
                </div>
            </div>
        </div>    
    );
};

export { Card }
