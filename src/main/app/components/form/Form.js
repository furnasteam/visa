import React from 'react';
import './form.scss';
import get from 'lodash/get';
import {object, func} from 'prop-types';

export class Form extends React.Component {

  static propTypes = {
    value: object,
    onChange: func
  };

  handleFieldChange = (fieldValue, fieldName) => {
    const {onChange, value} = this.props;
    onChange({...value, [fieldName]: fieldValue});
  };

  mapChildren(children, value, context){

    return React.Children.map(children, function(child) {
      if(!child) return child;
      if(child && child.props && child.props.children){
        return context.mapChildren(child.props.children, value, context);
      }
      if(!child.props) return;
      return React.cloneElement(child, {
        value: get(value, child.props.fieldName),
        onChange: (fieldValue) => context.handleFieldChange(fieldValue, child.props.fieldName)});
    });
  }
  render() {
    const {children, value} = this.props;
    var context = this;

    const extendedChildren = this.mapChildren(children, value, context);

    return (
        <form>
          {extendedChildren}
        </form>
    );
  }

}
