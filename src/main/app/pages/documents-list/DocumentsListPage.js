import React from 'react';
import './documents-list.scss';
import {string} from 'prop-types';
import {Title} from '../../components/title/Title';
import {UserType} from '../../models/UserTypeModel';
import {DocumentTag, DocumentTagGroupName, DocumentTagGroups, getTagGroup} from '../../models/DocumentTagModel';
import {Question} from './components/question/Question';
import {Documents} from '../../components/documents/Documents';
import {Header} from '../../components/header/Header';
import size from 'lodash/size';
import find from 'lodash/find';


const TagByUserTypeDictionary = {
  [UserType.CHILD]: DocumentTag.NO_PROFESSION,
  [UserType.BUSINESSMAN]: DocumentTag.BUSINESSMAN,
  [UserType.EMPLOYEE]: DocumentTag.WORKER,
  [UserType.HOUSEWIFE]: DocumentTag.NO_PROFESSION,
  [UserType.IDLE]: DocumentTag.NO_PROFESSION,
  [UserType.RETIREE]: DocumentTag.PENSIONER,
  [UserType.SCHOOLCHILD]: DocumentTag.NO_PROFESSION,
  [UserType.STUDENT]: DocumentTag.STUDENT,
};


export class DocumentsListPage extends React.Component {

  static propTypes = {
    userType: string
  };

  state = {
    tags: [],
    showQuestions: true,
    showDocumentsList: false,
    showLoader: false
  };

  componentWillMount() {
    const {userType} = this.props;
    this.setState({tags: [TagByUserTypeDictionary[userType]]});
  }

  handleCreateDocumentsListClick = () => {
    this.setState({showLoader: true, showQuestions: false});
    setTimeout(() => {
      this.setState({showDocumentsList: true, showLoader: false})
    }, 1000)
  };

  handleChange = (tags) => {
    this.setState({tags});
    if (size(tags) === 6) {
      this.handleCreateDocumentsListClick();
    }
  };

  getProfessionText(professionTag) {
    switch (professionTag) {
      case DocumentTag.WORKER:
        return 'работника';
      case DocumentTag.STUDENT:
        return 'студента';
      case DocumentTag.BUSINESSMAN:
        return 'ИП';
      case DocumentTag.PENSIONER:
        return 'пенсионера';
      case DocumentTag.NO_PROFESSION:
        return 'гражданина РФ';
    }
  }

  getTitleText() {
    const {tags} = this.state;
    const profession = find(tags, tag => getTagGroup(tag) === DocumentTagGroupName.PROFESSION);
    return `Список документов для ${this.getProfessionText(profession)}, `;
  }

  render() {
    const {showQuestions, showLoader, showDocumentsList, tags} = this.state;
    return (
      <div className="documents-list">
        <Header/>
        <div className="documents-list__content">
          <Title className="documents-list__title">
            {size(tags) !== 6 ? 'Автоматически сформируем список документов на визу, который подойдет именно вам' : this.getTitleText()}
          </Title>
          {showQuestions &&
          <div>
            <Question tags={tags}
                      className="documents-list__question"
                      question="1. Младше 18 лет?"
                      onChange={this.handleChange}
                      tagOptions={DocumentTagGroups.AGE}/>
            <Question tags={tags}
                      className="documents-list__question"
                      question="2. Где будете проживать?"
                      onChange={this.handleChange}
                      tagOptions={DocumentTagGroups.ACCOMMODATION}/>
            <Question tags={tags}
                      className="documents-list__question"
                      question="3. Кто оплачивает поездку?"
                      onChange={this.handleChange}
                      tagOptions={DocumentTagGroups.PAYER}/>
            <Question tags={tags}
                      className="documents-list__question"
                      question="4. На чем добираетесь?"
                      onChange={this.handleChange}
                      tagOptions={DocumentTagGroups.TRANSPORT}/>
            <Question tags={tags}
                      className="documents-list__question"
                      question="5. Пассажир или водитель?"
                      onChange={this.handleChange}
                      tagOptions={DocumentTagGroups.DRIVER}/>
          </div>}

          {showLoader && <div className="documents-list__loader"></div>}

          {showDocumentsList && <div>
            <Documents selectedTags={tags}/>
          </div>}
        </div>
      </div>
    );
  }

}
