import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SignUpModal = ({ 
    showModal, handleClose, onSubmit, onChange, fullName, signUpEmail, signUpPass, signUpConfirmPass, error
  }) => {
    return(
      <Modal show={showModal} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>SIGN UP</Modal.Title>
          </Modal.Header>
          <form onSubmit={onSubmit}>
            <Modal.Body>
                <div className="form-group">
                  <label htmlFor="fullName" className="text-info">First Name:</label><br />
                  <input type="text" name="fullName" required className="form-control" value={fullName} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="signUpEmail" className="text-info">Email:</label><br />
                  <input type="email" name="signUpEmail" required className="form-control" value={signUpEmail} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="signUpPass" className="text-info">Password:</label><br />
                  <input type="password" name="signUpPass" required className="form-control" value={signUpPass} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="signUpConfirmPass" className="text-info">Confirm Password:</label><br />
                  <input type="password" name="signUpConfirmPass" required className="form-control" value={signUpConfirmPass} onChange={onChange} />
                </div>
                {error ? <p> {error} </p> : null}
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' className='btn-primary btn' value='Submit' />
            </Modal.Footer>
          </form>
      </Modal>
    );
  }

export { SignUpModal };
