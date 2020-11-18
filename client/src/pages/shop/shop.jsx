import React from 'react';

import ShopData from '../../components/shop-data/shop-data';
import ShopEvaluation from '../../components/shop-evaluation/shop-evaluation';
import Loader from '../../components/loader/loader';

import Client from '../../common/Client';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      data: {}
    };
  }

  componentDidMount() {
    const { shopId } = this.props.match.params;
    Client.getShop(shopId)
      .then(data => this.setState({data, loaded: true}));
  }

  handleComment = (evaluation) => {
    const { shopId } = this.props.match.params;
    Client.updateShop(shopId, evaluation)
      .then(() => this.setState({loaded: false}))
      .then(() => Client.getShop(shopId))
      .then(data => this.setState({data, loaded: true}));
  }

  renderPage = () => {
    const { data, loaded } = this.state;

    if (!loaded) {
      return <Loader/>;
    } else {
      return (
        <div className='Shop Shop--fade-in'>
          <ShopData {...data.data} />
          <ShopEvaluation {...data.evaluation} handleComment={this.handleComment} />
        </div>
      );
    }
  }

  render() {
   return this.renderPage();
  }
}
export default ShopPage;
