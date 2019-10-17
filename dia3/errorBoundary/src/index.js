import React, { Component } from 'react';
process.env.NODE_ENV = 'production';

import { render } from 'react-dom';
import App from './ErrorBoundary';
import './style.css';

render(<App />, document.getElementById('root'));
