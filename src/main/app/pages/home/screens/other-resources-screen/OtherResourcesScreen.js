import React from 'react';
import '../../home.scss';
import './other-resources-screen.scss';
import {Title} from '../../../../components/title/Title';
import {UniversalLink} from '../../../../components/universal-link/UniversalLink';
import {Picture} from '../../../../components/picture/Picture';

export class OtherResourcesScreen extends React.Component {
  render() {
    return (
      <div className="other-resources-screen">
        <Title className="other-resources-screen__title">Ищите нас на других ресурсах:</Title>
        <div className="other-resources-screen__arrow-green-icon">
        </div>
        <div className="other-resources-screen__container">
          <div className="other-resources-screen__item other-resources-screen__resources-col3">
            <UniversalLink href="https://www.instagram.com/furnasteam/"
                           className="other-resources-screen__link">
              Instagram
            </UniversalLink>
          </div>
          <div className="other-resources-screen__item other-resources-screen__resources-col3">
            <UniversalLink href="https://spark.ru/startup/furnas/blog"
                           className="other-resources-screen__link">
              Spark
            </UniversalLink>
          </div>
          <div className="other-resources-screen__item other-resources-screen__resources-col3">
            <UniversalLink href="https://vk.com/furnas"
                           className="other-resources-screen__link">
              Vkontakte
            </UniversalLink>
          </div>
          <div className="other-resources-screen__item  other-resources-screen__resources-col2">
            <div className="other-resources-screen__facebook-wrapper">
              <UniversalLink href="https://www.facebook.com/furnasteam/"
                             className="other-resources-screen__link">
                Facebook
              </UniversalLink>
            </div>
          </div>
          <div className="other-resources-screen__item other-resources-screen__resources-col2">
            <div className="other-resources-screen__media-wrapper">
              <UniversalLink href="https://medium.com/@furnasteam"
                             className="other-resources-screen__link">
                Medium
              </UniversalLink>
            </div>
          </div>
          <Picture imgClassName="other-resources-screen__flamenco-image"
                   forPhoneOnly={[require('./images/flamenco.svg')]}
                   forPhoneOnlyRetina={[require('./images/flamenco.svg')]}
                   forTabletPortraitUp={[require('./images/flamenco.svg')]}
                   forTabletPortraitUpRetina={[require('./images/flamenco.svg')]}
                   alt="Иллюстрация испанской женщины в национальной одежде"/>
        </div>
      </div>
    );
  }
}