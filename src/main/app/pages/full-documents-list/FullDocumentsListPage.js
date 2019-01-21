import React from 'react';
import './full-documents-list.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {string} from 'prop-types';

export class FullDocumentsListPage extends React.Component {

  render() {
    return (
      [
        <Helmet>
          <title>Документы на визу в Испанию 2019</title>
          <meta name="description" content="Актуальный список документов для самостоятельного получения визы в официальном визовом центре Испании в 2019 году."/>
        </Helmet>,
        <div className="full-documents-list">
          <Header/>
          <div className="full-documents-list__content">
            <h1>
              Полный список документов на визу в Испанию
            </h1>
          </div>
        </div>
      ]
    );
  }

}
