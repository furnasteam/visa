import React from 'react';
import {func, string, bool} from 'prop-types';
import classNames from 'classnames';
import './radioButton.scss';
import PropTypes from 'prop-types';

export class RadioButton extends React.Component {

  static propTypes = {
    className: string,
    value: string,
    name: string,
    label: string,
    id: string,
    checked: bool
  };

  render() {
    const {className, label, name,  id, value, checked} = this.props;

    return (
      <div className='radio-button-item'>
        <input type="radio"
               className={classNames('radio-button-item__input',  className)}
               id={id}
               name={name}
               value={value}
               defaultChecked={checked} />
        <label htmlFor={id} className={classNames('radio-button-item__label',  className)}>{label}</label>
      </div>
    );
  }

}

