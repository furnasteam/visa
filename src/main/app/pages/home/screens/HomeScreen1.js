import React from 'react';
import '.././home.scss';
import {Button} from '../../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../../helpers/appRoutes';
import {Title} from '../../../components/title/Title';
import Main_pic_1x from './images/Main_pic_1x.png';

export class HomeScreen1 extends React.Component {
  render() {
    return (
        <div className="home__content">
          <Title>Список документов на визу в Испанию</Title>
          <ul className="list-item">
            <li>
              <span>актуальный перечень документов для визы</span>
            </li>
            <li>
              <span>бесплатно получаете заполненную анкету</span>
            </li>
            <li>
              <span> разбор всех пунктов анкеты</span>
            </li>
          </ul>
          <div>
            <span className="home__doc-list-btn">
              <Link to={createFullDocumentsListRoute()}>
                <Button>Список документов</Button>
              </Link>
            </span>
            {/*<img src="./images/Main_pic_1x.png"/>*/}
            <img src={Main_pic_1x} style={{position:'relative', left: '-300px'}} />
          </div>
      </div>);
  }
}