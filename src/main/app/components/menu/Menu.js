import React from 'react';
import classNames from 'classnames';
import './menu.scss';
import {string, func, array, object} from 'prop-types';

export class Menu extends React.Component {
  static propTypes = {
    menuData: object,
  }
  render() {
    let {menuData} = this.props;

    let menuItems = Object.entries(menuData).map(function(item, i){
      var itemValue = item[1];
      return  <a href={itemValue.url} key={itemValue.url}>{itemValue.name}</a>
    });

    return (
      <div className="navbar">
        {menuItems}
      </div>
    );    
  }

}
