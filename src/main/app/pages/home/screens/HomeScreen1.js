import React from 'react';
import '.././home.scss';
// import {Helmet} from 'react-helmet';
// import {Header} from '../../components/header/Header';
import {Button} from '../../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../../helpers/appRoutes';
import {Title} from '../../../components/title/Title';

export class HomeScreen1 extends React.Component {
    render(){
        return(<div className="home__content">
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
            <span className="home__doc-list-btn">
                <Link to={createFullDocumentsListRoute()}>
                  <Button>Список документов</Button>
                </Link>
              </span>
        </div>);
    }
}