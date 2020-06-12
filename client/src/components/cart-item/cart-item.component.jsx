import React from 'react';

import * as sc from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <sc.CartItemContainer>
    <sc.CartItemImage src={imageUrl} alt='item' />
    <sc.ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </sc.ItemDetailsContainer>
  </sc.CartItemContainer>
);

export default CartItem;
