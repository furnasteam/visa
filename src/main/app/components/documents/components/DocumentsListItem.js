import React from 'react';
import {array, string} from 'prop-types';
import {DocumentTagTranslation, getTagGroup} from '../../../models/DocumentTagModel';
import classNames from 'classnames';
import map from 'lodash/map';
import lowerCase from 'lodash/lowerCase';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import {DocumentIndex} from './DocumentIndex';

export class DocumentsListItem extends React.Component {

  static propTypes = {
    tags: array,
    selectedTags: array,
    documentIndex: string
  };

  setIndexToChildren(children) {
    const {documentIndex} = this.props;
    return React.Children.map(children, (child) => {
      if (child.type === DocumentIndex) {
        return React.cloneElement(child, {documentIndex});
      } else if (child && child.props && child.props.children) {
        return React.cloneElement(child, {children: this.setIndexToChildren(child.props.children)});
      } else {
        return child;
      }
    })
  };

  render() {
    const {children, tags, selectedTags} = this.props;
    if (!isEmpty(tags) && !includes(selectedTags, ...tags)) {
      return null;
    }
    return (
      <li className="documents__list-item">
        {isEmpty(selectedTags) &&
        <div className="documents__tags-container">
          {map(tags, (tag, index) => (
            <span key={index}
                  className={classNames(`documents__tag documents__tag-${lowerCase(getTagGroup(tag))}`)}>
              {DocumentTagTranslation[tag]}
              </span>
          ))}
        </div>}
        <div className="documents__list-item-text">
          {this.setIndexToChildren(children)}
        </div>
      </li>
    );
  }

}
