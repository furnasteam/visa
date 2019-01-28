import React from 'react';
import '.././home.scss';
import {Button} from '../../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../../helpers/appRoutes';
import {Title} from '../../../components/title/Title';

export class HomeScreen4 extends React.Component {
    render(){
        return(<div className="home__content">
            <Title>Ищите нас на других ресурсах:</Title>
            <div></div>
        </div>);
    }
}