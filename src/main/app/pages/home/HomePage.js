import React from 'react';
import './home.scss';
import {Helmet} from 'react-helmet';
import {Header} from '../../components/header/Header';
import {ContactScreen} from './screens/contact/ContactScreen';
import {Popup} from '../../components/Popup/Popup';
import {WorkerVisaDocumentsCard} from '../../articles/worker-visa-documents/WorkerVisaDocumentsCard';
import {FaviconArticleCard} from '../../articles/favicon-article/FaviconArticleCard';

export class HomePage extends React.Component {

  state = {
    userContact: '',
    contactPopupShown: false,
    requestSent: false
  };

  handleContactClick = () => {
    window.mixpanel.track(
      "Furnas | user clicked contact button"
    );
    this.setState({contactPopupShown: !this.state.contactPopupShown, requestSent: false});
  };

  handleSendContactClick = contact => {
    if (contact) {
      window.mixpanel.track(
        "Furnas | added user contact",
        {contact}
      );
      this.setState({contactPopupShown: true, requestSent: true});
    }
  };

  handleCloseButtonClick = () => {
    this.setState({contactPopupShown: false, requestSent: false});
  };

  render() {
    const {contactPopupShown, requestSent} = this.state;
    return (
      [
        <Helmet>
          <title>Блог | Furnas</title>
          <meta name="description" content="Рассказываем о том, как мы работает, что делаем сейчас, какие допускаем ошибки и делимся своими знаниями."/>
        </Helmet>,
        <div className="home">
          <Header onContactClick={this.handleContactClick}
                  contactPopupShown={contactPopupShown}/>
          <div className="home__content">
            <WorkerVisaDocumentsCard/>
            <FaviconArticleCard/>
          </div>
          <Popup shown={contactPopupShown}>
            <ContactScreen requestSent={requestSent}
                           onCloseButtonClick={this.handleCloseButtonClick}
                           onSendContactClick={this.handleSendContactClick}/>
          </Popup>
        </div>
      ]
    );
  }

}
