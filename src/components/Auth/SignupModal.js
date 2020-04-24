import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './style.css';

const SignupModal = ({ 
    show, handleClose, signupSubmit, changed, fName, lName, signUpEmail, signupPass, signupConfirmPass, err
  }) => {
    return(
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>SIGN UP</Modal.Title>
          </Modal.Header>
          <form onSubmit={signupSubmit}>
            <Modal.Body>
                <div className="form-group">
                  <label htmlFor="fName" className="text-info">First Name:</label><br />
                  <input type="text" name="fName" required className="form-control" value={fName} onChange={changed} />
                </div>
                <div className="form-group">
                  <label htmlFor="lName" className="text-info">Last Name:</label><br />
                  <input type="text" name="lName" required className="form-control" value={lName} onChange={changed} />
                </div>
                <div className="form-group">
                  <label htmlFor="signupEmail" className="text-info">Email:</label><br />
                  <input type="email" name="signupEmail" required className="form-control" value={signUpEmail} onChange={changed} />
                </div>
                <div className="form-group">
                  <label htmlFor="signupPassword" className="text-info">Password:</label><br />
                  <input type="password" name="signupPassword" required className="form-control" value={signupPass} onChange={changed} />
                </div>
                <div className="form-group">
                  <label htmlFor="signupConfirmPassword" className="text-info">Confirm Password:</label><br />
                  <input type="password" name="signupConfirmPassword" required className="form-control" value={signupConfirmPass} onChange={changed} />
                </div>
                {err ? <p className='redColor'> {err} </p> : null}
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' className='btn-primary btn' value='Submit' />
            </Modal.Footer>
          </form>
      </Modal>
    );
  }

export {SignupModal};