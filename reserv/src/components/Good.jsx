import React from 'react';
import {Link} from 'react-router';

import goods from '../goods.json';

const Good = React.createClass({
  getInitialState: function() {
    const good = goods.filter(item => item.id === this.props.params.goodId);
    return {
      good
    }
  },

  onClickAddToCart: function() {
    this.props.foo(1);
  },

  render: function() {
    const {good} = this.state;
    return(
      <div>
        <h1>{good[0].header}</h1>
        <img className='good-image-full' src={good[0].img} />
        <p>{good[0].full_descr}</p>
        <button onClick={this.onClickAddToCart} className='add-to-cart' type="button">Add to Cart</button>
        <br />
        <button className='back-to-catalog' type="button"><Link to='/catalog'>Back to Catalog</Link></button>
      </div>
    )
  }
});

export default Good;
