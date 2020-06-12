import React from 'react';

import * as sc from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <sc.GroupContainer>
    <sc.FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <sc.FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </sc.FormInputLabel>
    ) : null}
  </sc.GroupContainer>
);

export default FormInput;
