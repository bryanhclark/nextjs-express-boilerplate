import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Login = props => (
  <div>
    <Link href="/auth/google">
      <button type="button">
        Login
      </button>
    </Link>
  </div>
);

Login.propTypes = {

};

export default Login;
