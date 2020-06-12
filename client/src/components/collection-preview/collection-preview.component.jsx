import React from 'react';
import { withRouter } from 'react-router-dom';

import * as sc from './collection-preview.styles.jsx';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <sc.CollectionPreviewContainer>
    <sc.TitleContainer
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </sc.TitleContainer>
    <sc.PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </sc.PreviewContainer>
  </sc.CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
