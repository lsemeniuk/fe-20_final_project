/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Error500 from '../Error500/Error500';
// import { addError } from '../../../http/errorsAPI';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorPresent: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { errorPresent } = prevState;
    if (errorPresent && location.pathname !== prevProps.location.pathname) {
      this.setState({ errorPresent: false });
    }
  }

  componentDidCatch() {
    // addError({ name: error.name, message: error.message, errorInfo });
    this.setState({ errorPresent: true });
  }

  render() {
    const { errorPresent, error } = this.state;
    const { children } = this.props;
    if (errorPresent) {
      return <Error500 error={error} />;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: '',
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  location: PropTypes.object.isRequired,
};

export default withRouter(ErrorBoundary);
