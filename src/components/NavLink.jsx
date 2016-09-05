import React from 'react';
import {Link} from 'react-router';

const NavLink = React.createClass({
  render: function() {
    return(
      <Link {...this.props} activeClassName='active' />
    )
  }
});

export default NavLink;
