import React from 'react';

import GoogleMapsContainer from '../../components/google-map/google-map.component.jsx'
import ContactForm from '../../components/contact-form/contact-form.component';

import * as sc from './contact.styles';

const ContactPage = () => (
  <sc.contactContainer>
    <GoogleMapsContainer />
    <ContactForm />
  </sc.contactContainer>
);

export default ContactPage;
