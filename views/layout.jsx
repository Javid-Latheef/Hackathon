import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'watson-react-components';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Speech to Text Demo
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div className="headerPane">
          <Icon type='play' fill='#FFFFFF' /><span className="headerSpan">Speech Recognizer</span>
          <span style={{float:'right',marginRight:'50px',color:'white',fontSize:'20px',position:'relative',top:'6px'}}><span style={{marginRight:'30px',color:'#ef6c00'}}>Home</span>
          <span>About</span></span>
        </div>
        <div id="root">
          {/* {children} */}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
