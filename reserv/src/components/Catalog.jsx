import React from 'react';

import goods from '../goods.json';
import Good from './Good.jsx';

const Catalog = React.createClass({
  getInitialState: function() {
    return {
      goods
    }
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClickOnGood: function(goodId) {
    this.context.router.push(`/catalog/${goodId}`);
  },

  render: function() {
    return(
      <div className='catalog-page'>
        <h2 className='catalog__header'>All goods is here</h2>
        <ul className='goods'>
          {this.state.goods.map(item => (
            <li onClick={this.handleClickOnGood.bind(null, item.id)} key={item.id}>
              <div className="good__header">{item.header}</div>
              <img className='good-image' src={item.img} />
              <p>{item.small_descr}</p>
            </li>)
          )}
        </ul>
      </div>
    )
  }
});

export default Catalog;
