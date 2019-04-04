import React from 'react';
import {array, func, string} from 'prop-types';
import './question.scss';
import {Button, ButtonStyle} from '../../../../components/button/Button';
import map from 'lodash/map';
import {DocumentTagQuestionTranslation} from '../../../../models/DocumentTagModel';
import includes from 'lodash/includes';
import remove from 'lodash/remove';
import classNames from 'classnames';

export class Question extends React.Component {

  static propTypes = {
    question: string,
    tags: array,
    tagOptions: array,
    onChange: func,
    className: string
  };

  isTagSelected(tag) {
    const {tags} = this.props;
    return includes(tags, tag);
  }

  handleTagClick = (tag) => {
    const {tags, onChange, tagOptions} = this.props;
    const tagsWithoutOptions = remove(tags, t => !includes(tagOptions, t));
    onChange([...tagsWithoutOptions, tag]);
  };

  render() {
    const {question, tagOptions, className} = this.props;

    return (
      <div className={classNames(className, 'question')}>
        <div className="question__label">
          {question}
        </div>
        {map(tagOptions, (tag, index) => (
          <Button key={tag}
                  className={index > 0 ? 'question__right-button' : 'question__left-button'}
                  onClick={() => this.handleTagClick(tag)}
                  buttonStyle={this.isTagSelected(tag) ? ButtonStyle.GREEN_FULL : ButtonStyle.GREEN_EMPTY}>
            {DocumentTagQuestionTranslation[tag]}
          </Button>)
        )}
      </div>
    );
  }

}
