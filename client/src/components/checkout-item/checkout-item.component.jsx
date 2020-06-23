import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';

import * as sc from './checkout-item.styles';
//import { removeItemFromCart } from '../../redux/cart/cart.utils';

const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <sc.CheckoutItemContainer>
      <sc.ImageContainer>
        <img src={imageUrl} alt='item' />
      </sc.ImageContainer>
      <sc.TextContainer>{name}</sc.TextContainer>
      <sc.QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </sc.QuantityContainer>
      <sc.TextContainer>${price}</sc.TextContainer>
      <sc.RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </sc.RemoveButtonContainer>
    </sc.CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
