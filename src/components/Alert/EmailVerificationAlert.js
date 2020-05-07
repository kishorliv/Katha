import React from 'react';
import { withAlert } from './withAlert';

const EmailVerificationAlertBase = ({ isEmailAlreadySent, handleSentEmailVerification }) => {
    return(
        <div>
            {isEmailAlreadySent ? (
                <p>
                    E-Mail confirmation sent! Check your email inbox.
                    Check your spam if email is not in inbox.
                    Refresh this page after confirmation.
                </p>
            ) : (
                <p>
                    Verify your email to continue.
                </p>
            )}

            <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleSentEmailVerification}
                disabled={isEmailAlreadySent}  
            >
                Send Confirmation Email
            </button>
      </div>
    );
};

const EmailVerificationAlert = withAlert(EmailVerificationAlertBase);

export { EmailVerificationAlert };
