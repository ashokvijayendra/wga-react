import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const RefreshComponents = (refresh = false) => {
  document.querySelectorAll('[data-reactcomponent]').forEach((ele) => {
    const root = ele.root ||  ReactDOM.createRoot(ele);
    ele.root = root;
    root.render(
        <App component={ele.dataset.reactcomponent} variant={ele.par} url={ele.dataset.url}/>
    );
  });
}

document.addEventListener("DOMContentLoaded", RefreshComponents);


