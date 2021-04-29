/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Error500 from '../Error500/Error500';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorPresent: false,
      error: 'qs',
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
    // axios.post('/api/errors', JSON.stringify({ error, errorInfo }));
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
