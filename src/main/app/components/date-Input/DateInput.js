import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {string, func} from 'prop-types';
import {Input} from '../input/Input';

export class DateInput extends React.Component {

  static propTypes = {
    className: string,
    value: string,
    onChange: func,
    placeholder: string
  };

  static defaultProps = {
    onChange(){
    }
  };

  handleChange = (event) => {
    const {onChange} = this.props;
    onChange(event.target.value);
  };
  render() {
    return (
      <Input {...this.props}
             inputType = "date"
             dataInputmask = "'alias':'mm/dd/yyyy'"/>
    );
  }
}