import React from 'react';
import {array} from 'prop-types';
import {DocumentTagTranslation, getTagGroup} from '../../../pages/full-documents-list/FullDocumentsListModel';
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
      <li className="documents__list-item">
        <div className="documents__tags-container">
          {map(tags, (tag, index) => (
            <span key={index}
                  className={classNames(`documents__tag documents__tag-${lowerCase(getTagGroup(tag))}`)}>
              {DocumentTagTranslation[tag]}
              </span>
          ))}
        </div>
        <div className="documents__list-item-text">
          {children}
        </div>
      </li>
    );
  }

}
