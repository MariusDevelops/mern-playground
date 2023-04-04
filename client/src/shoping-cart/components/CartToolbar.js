import React from 'react';
import { Link } from 'react-router-dom';

const CartToolbar = () => {
  return (
    <div className="toolbar">
      <Link to="/shopingcart">Shoping Cart</Link>
      <Link to="/cartpage">Cart</Link>
    </div>
  );
};

export default CartToolbar;
