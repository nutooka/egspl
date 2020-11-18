import React from 'react';

import List from '../list/list';
import ShopHeader from '../shop-header/shop-header';

import CONSTANTS from '../../common/Constants';

const { ICONS } = CONSTANTS;

const ShopData = ({ other, ...data }) => (
  <div className='ShopData'>
    <ShopHeader {...data} />
    <div className='ShopData__Other'>
      <List items={other} icons={ICONS}/>
    </div>

  </div>
);

export default ShopData;
