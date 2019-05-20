import React from 'react';
import classNames from 'classnames';
import './menu.scss';
import {string, func, array, object} from 'prop-types';

export class Menu extends React.Component {
  static propTypes = {
    menuData: object
  }
  state = {
    activeItem: null
  }

  setActiveItem(item){
    this.setState({activeItem:item});
  }
  componentWillMount() {
    var {activeItem} = this.state;
    var {menuData} = this.props;
    this.setState({activeItem: activeItem || menuData.PROFILE.url});
  }
  render() {
    var {menuData} = this.props;
    var {activeItem} = this.state;
    var context = this;
    let menuItems = Object.entries(menuData).map(function(item, i){
      var itemValue = item[1];
      return  <a href={itemValue.url}
                 key={itemValue.url}
                 onClick={() => context.setActiveItem(itemValue.url)}
                 className={itemValue.url == activeItem ? "active" : ""}>{itemValue.name}</a>
    });

    let moblieMenuItems = Object.entries(menuData).map(function(item, i){
      var itemValue = item[1];
      return  <span>
                <a href={itemValue.url}
                 key={itemValue.url}
                 onClick={() => context.setActiveItem(itemValue.url)}
                 className={itemValue.url == activeItem ? "active" : ""}>{i+1}</a>
                <label>{itemValue.url == activeItem ? itemValue.name : ""}</label>

              </span>
    });
    return (<span>
      <div className="navbar">
        {menuItems}
      </div>
      <div className="navbar-mobile">
        <div className="line"></div>
        {moblieMenuItems}
      </div>
      </span>
    );
  }
}
