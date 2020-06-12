import React from 'react';

import * as sc from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <sc.CustomButtonContainer {...props}>{children}</sc.CustomButtonContainer>
);

export default CustomButton;
