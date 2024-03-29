import React from 'react';
import { connect } from 'react-redux';
import { decryptKey } from '../../../../rpc/calls/decryptKey';
import { 
  LoginRender
} from './login.render';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formError: false,
      formLock: false
    }

    this.submitPassword = this.submitPassword.bind(this)
  }

  submitPassword(password) {
    this.setState({ formLock: true, formError: false }, async () => {
      try {
        const seed = await decryptKey(password, this.props.activeUser.pinFile)
        
        this.props.setSeed(seed, () => {
          this.props.activateCoin()
        })
      } catch (e) {
        console.error(e.message)
        this.setState({ formLock: false, formError: e.message })
      }
    })
  }

  render() {
    return LoginRender.call(this);
  }
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.user.users[state.user.activeUserId],
  };
};

export default connect(mapStateToProps)(Login);