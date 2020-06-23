import React from 'react';
import Directory from '../../components/directory/directory.component';
import * as sc from './homepage.styles';

const Homepage = () => {
  return (
    <sc.HomepageContainer>
      <Directory />
    </sc.HomepageContainer>
  );
};

export default Homepage;
