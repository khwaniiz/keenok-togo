import React from 'react';
import { withRouter } from 'react-router-dom'; //HOC take component then modify then return a modified component. Can access to history

import * as sc from './menu-item.styles';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <sc.MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <sc.BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <sc.ContentContainer className='content'>
      <sc.ContentTitle>{title.toUpperCase()}</sc.ContentTitle>
      <sc.ContentSubtitle>ORDER NOW</sc.ContentSubtitle>
    </sc.ContentContainer>
  </sc.MenuItemContainer>
);

export default withRouter(MenuItem);
