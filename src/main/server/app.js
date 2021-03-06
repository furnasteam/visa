const express = require('express');
const React = require('react');
const path = require('path');
const {App} = require('../app/app');
const {StaticRouter} = require('react-router-dom');
const {renderToString, renderToStaticMarkup} = require('react-dom/server');
const {Helmet} = require('react-helmet');

const app = express();
app.get('*.gz', function(req, res, next) {
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  next();
});
app.use(express.static('public'));

app.get("*", (req, res) => {
  let context = {};

  const appString = renderToString((
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>));

  const helmet = Helmet.renderStatic();

  res.write("<!DOCTYPE html>");
  res.write(renderToStaticMarkup(
    <html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="google-site-verification" content="1mW_65D1liOX9N8PT2g81ybfDbx0kTiIljMcbA-gips" />
      <meta name="yandex-verification" content="62b70bb0d887d1d6" />
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {helmet.script.toComponent()}
      {/*<link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500&amp;subset=cyrillic" rel="stylesheet"/>*/}
      <link rel="stylesheet" type="text/css" href="/styles.css"/>
    </head>
    <body>
    <div id="root" dangerouslySetInnerHTML={ {__html: appString} }>
    </div>
    {/*<script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>*/}
    <script src="/visa.client.js"></script>
    </body>
    </html>));
  res.end();
});

export default app;
