import React from 'react';
import { Link } from 'react-router-dom';

import ShopHeader from '../shop-header/shop-header';

const PreviewShop = ({ id, ...props}) => (
  <Link to={`/shops/${id}`}>
    <ShopHeader hoverable {...props}/>
  </Link>
);

export default PreviewShop;
