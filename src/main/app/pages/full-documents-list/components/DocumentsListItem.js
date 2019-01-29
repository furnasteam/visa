import React from 'react';
import {array} from 'prop-types';
import {DocumentTagTranslation, getTagGroup} from '../FullDocumentsListModel';
import classNames from 'classnames';
import map from 'lodash/map';
import lowerCase from 'lodash/lowerCase';

export class DocumentsListItem extends React.Component {

  static propTypes = {
    tags: array
  };

  render() {
    const {children, tags} = this.props;
    return (
      <li className="full-documents-list__list-item">
        <div className="full-documents-list__tags-container">
          {map(tags, tag => (
            <span className={classNames(`full-documents-list__tag full-documents-list__tag-${lowerCase(getTagGroup(tag))}`)}>{DocumentTagTranslation[tag]}</span>
          ))}
        </div>
        <p className="full-documents-list__list-item-text">
          {children}
        </p>
      </li>
    );
  }

}
