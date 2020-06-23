import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import * as sc from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <sc.CartDropdownContainer>
    <sc.CartItemsContainer>
     {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <sc.EmptyMessageContainer>Your cart is empty</sc.EmptyMessageContainer>
      )}
    </sc.CartItemsContainer>
    <sc.CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </sc.CartDropdownButton>
  </sc.CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// if there is no mapDispatchToProps(the second parameter), connect will pass dispatches into component as a prop
