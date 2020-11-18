import React from 'react';

import PreviewShop from '../../components/preview-shop/preview-shop';
import Loader from '../../components/loader/loader';

import Client from '../../common/Client';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: {}
    };
  }

  componentDidMount() {
    Client.getShops()
      .then(data => this.setState({ data, loaded: true }));
  }

  render() {
    const { data, loaded } = this.state;

    if (!loaded) {
      return <Loader/>;
    } else {
      return (
        <div className='Home Home--fade-in'>
          {data.map((item, index) => (
            <PreviewShop key={index} id={item._id} {...item.data} />
          ))}
        </div>
      );
    }
  }
}

export default HomePage;
