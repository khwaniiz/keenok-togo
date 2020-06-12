import React from 'react';
import * as sc from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <sc.SpinnerOverlay>
        <sc.SpinnerContainer />
      </sc.SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
