import React from 'react';
import {Link} from 'react-router';

import goods from '../goods.json';

const Cart = React.createClass({
	getInitialState: function() {
		var newArray = goods.filter(item => this.props.goodsListInCart.indexOf(item.id) !== -1);
		return {
			goodsInCart: newArray
		}
	},

	handleDeleteGood: function(deletedGoodId, decCount) {
		var newArray = this.state.goodsInCart.slice();
		newArray = newArray.filter(item => item.id !== deletedGoodId);
		this.setState({goodsInCart: newArray});
		this.props.deleteFromCart(deletedGoodId, decCount);
	},

	render: function() {
		return(
			<div className='cart-page'>
				<h2 className='cart__header'>Your Cart</h2>
				<ul className='goods-in-cart'>
					 {this.state.goodsInCart.map(item => (
		           	 <li key={item.id}>
		              <div className="good__header">{item.header}</div>
		              <img className='good-image' src={item.img} />
		              <p>{item.small_descr}</p>
									<button onClick={this.handleDeleteGood.bind(null, item.id, -1)} className='delete-from-cart' type='button'>Delete from Cart</button>
		            </li>)
          )}
				</ul>
				<button className='back-to-catalog' type='button'><Link to='/catalog'>Back to Catalog</Link></button>
			</div>
		)
	}
});

export default Cart;
