import React from 'react';
import {Link, IndexLink} from 'react-router';

import NavLink from './NavLink.jsx';

const App = React.createClass({
  getInitialState: function() {
    return {
      countGoodsInCart: 0,
      userGoodsInCart: []
    }
  },

  handleClickAddToCart: function(goodId, incCount) {
    this.setState({countGoodsInCart: this.state.countGoodsInCart + incCount});
    var newArray = this.state.userGoodsInCart.slice();
    newArray.push(goodId);
    this.setState({userGoodsInCart: newArray});
  },

  handleClickDeleteFromCart: function(deletedGoodId, decCount) {
    this.setState({countGoodsInCart: this.state.countGoodsInCart + decCount});
    var newArray = this.state.userGoodsInCart.slice();
    newArray = newArray.filter(item => item !== deletedGoodId);
    this.setState({userGoodsInCart: newArray});
  },

  render: function() {
    const that = this;
    const children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        addToCart: that.handleClickAddToCart,
        goodsListInCart: that.state.userGoodsInCart,
        deleteFromCart: that.handleClickDeleteFromCart
      })
    })
    return(
      <div>
        <header>
          <h1>webtools studio</h1>
          <ul className="nav">
            <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
            <li><NavLink to='/catalog' activeClassName='active'>Catalog</NavLink></li>
            <li><NavLink to='/about' activeClassName='active'>About</NavLink></li>
          </ul>
          <div className="cart"><Link to='/cart'>In your Cart <span>{this.state.countGoodsInCart}</span> goods</Link></div>
        </header>

        <div className="content">
          {children}
        </div>

        <footer>
          @ All Rights Reserved. Powered By Web2ls.
        </footer>
      </div>
    )
  }
});

export default App;
