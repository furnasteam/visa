import React from 'react';
import '.././home.scss';
import {Button} from '../../../components/button/Button';
import {Link} from 'react-router-dom';
import {createFullDocumentsListRoute} from '../../../helpers/appRoutes';
import {Title} from '../../../components/title/Title';

export class HomeScreen3 extends React.Component {
    render(){
        return(<div className="home__content">
            <Title>Выберите для кого нужен список документов
                на туристическую визу</Title>
            <div className="home__content__tourist-container">
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
                <div className="home__content__tourist-item">
                    <div>

                    </div>
                    <span>работник</span>
                    <div>______</div>
                </div>
            </div>
        </div>);
    }
}