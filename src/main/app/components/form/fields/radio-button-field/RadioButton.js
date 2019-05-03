import React from 'react';
import {func, string, bool} from 'prop-types';
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
      <div>
        <input type="radio"
               id={id}
               name={name}
               value={value}
               defaultChecked={checked} />
          <label htmlFor={id}>{label}</label>
      </div>
    );
  }

}

