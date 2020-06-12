import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import * as sc from './header.styles';
import { ReactComponent as Logo } from '../../assests/bird.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <sc.HeaderContainer>
      <sc.LogoContainer to='/'>
        <Logo />
      </sc.LogoContainer>
      <sc.OptionsContainer>
        <sc.OptionsLink to='/shop'>SHOP</sc.OptionsLink>
        <sc.OptionsLink to='/contact'>CONTACT</sc.OptionsLink>
        {currentUser ? (
          <sc.OptionsLink as='div' onClick={signOutStart}>
            SIGN OUT
          </sc.OptionsLink>
        ) : (
          <sc.OptionsLink to='/signin'>SIGN IN</sc.OptionsLink>
        )}
        <CartIcon />
      </sc.OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </sc.HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
