import React from 'react';
import {HomePage} from './pages/home/HomePage';
import {Route, Switch} from 'react-router-dom'
import './seo/sitemap.xml';
import './seo/robots.txt';
import {Helmet} from 'react-helmet';
import {FullDocumentsListPage} from './pages/full-documents-list/FullDocumentsListPage';
import {createFullDocumentsListRoute, createHomeRoute} from './helpers/appRoutes';


export class App extends React.Component {

  render() {

    return ([
      <Switch key="1">
        <Route exact path={createFullDocumentsListRoute()}
               component={FullDocumentsListPage}/>
        <Route path={createHomeRoute()}
               component={HomePage}/>
      </Switch>,
      <Helmet key="2">
        <link rel="icon" sizes="192x192" href={require('./images/favicon-192x192.png')}/>
        <link rel="icon" sizes="144x144" href={require('./images/favicon-144x144.png')}/>
        <link rel="icon" sizes="96x96" href={require('./images/favicon-96x96.png')}/>
        <link rel="icon" sizes="48x48" href={require('./images/favicon-48x48.png')}/>
        <link rel="apple-touch-icon" href={require('./images/favicon-192x192.png')}/>
        <link rel="apple-touch-icon" sizes="76x76" href={require('./images/favicon-76x76.png')}/>
        <link rel="apple-touch-icon" sizes="120x120" href={require('./images/favicon-120x120.png')}/>
        <link rel="apple-touch-icon" sizes="152x152" href={require('./images/favicon-152x152.png')}/>
        <meta name="msapplication-square310x310logo" content={require('./images/favicon-310x310.png')}/>
      </Helmet>
    ]);
  }
}
