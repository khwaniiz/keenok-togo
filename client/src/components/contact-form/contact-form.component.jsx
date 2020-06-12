import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import * as sc from './contact-form.styles';

const ContactForm = () => {
  return (
    <sc.ContactFormContainer>
      <sc.ContactFormTitle>Contact</sc.ContactFormTitle>
      <span>Let us know if you have any question</span>

      <form>
        <FormInput name='email' type='email' label='email' required />

        <sc.ButtonsBarContainer>
          <CustomButton type='submit'> Submit </CustomButton>
        </sc.ButtonsBarContainer>
      </form>
    </sc.ContactFormContainer>
  );
};

export default ContactForm;
