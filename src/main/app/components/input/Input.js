import React from 'react';
import classNames from 'classnames';
import './input.scss';
import {string, func, bool} from 'prop-types';
import toUpper from 'lodash/toUpper';

export class Input extends React.Component {

  static propTypes = {
    className: string,
    value: string,
    onChange: func,
    placeholder: string,
    inputType :string,
    dataInputmask: string,
    capitilize: bool
  };

  static defaultProps = {
    onChange(){
    }
  };

  handleChange = (event) => {
    const {onChange, capitilize} = this.props;
    onChange(capitilize ? toUpper(event.target.value) : event.target.value);
  };

  render() {
    const {className, value, placeholder, inputType, dataInputmask} = this.props;

    return (
      <input className={classNames('input',  className)}
             value={value || ''}
             type={inputType || ''}
             data-inputmask = {dataInputmask || ''}
             onChange={this.handleChange}
             placeholder={placeholder}/>
    );
  }

}
