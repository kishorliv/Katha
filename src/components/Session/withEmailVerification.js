import React from 'react';

import { AuthUserContext } from './context';
import { withFirebase } from '../Firebase';
import { EmailVerificationAlert } from '../Alert';

const isEmailVerified = (authUser) => {
    return authUser && !authUser.emailVerified;
}

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isEmailAlreadySent: false };
    }

    handleSentEmailVerification = () => {
      this.props.firebase
        .verifyEmail()
        .then(() => this.setState({ isEmailAlreadySent: true }));
    };

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            isEmailVerified(authUser) ? (
                <EmailVerificationAlert 
                    isEmailAlreadySent={this.state.isEmailAlreadySent} 
                    handleSentEmailVerification={this.handleSentEmailVerification} 
                />
            ) : (
                <Component {...this.props} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withFirebase(WithEmailVerification);
};

export { withEmailVerification };
