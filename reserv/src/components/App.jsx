import React from 'react';
import {Link, IndexLink} from 'react-router';

import NavLink from './NavLink.jsx';

const App = React.createClass({
  getInitialState: function() {
    return {
      goodsInCart: 0
    }
  },

  handleClickAddToCart: function(count) {
    this.setState({goodsInCart: this.state.goodsInCart + count});
  },

  render: function() {
    const that = this;
    const children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        foo: that.handleClickAddToCart
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
          <div className="cart">In your Cart <span>{this.state.goodsInCart}</span> goods</div>
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
