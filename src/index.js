import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const RefreshComponents = (refresh = false) => {
  document.querySelectorAll('[data-reactcomponent]').forEach((ele) => {
    const root = ele.root ||  ReactDOM.createRoot(ele);
    ele.root = root;
    root.render(
        <App component={ele.dataset.reactcomponent} url={ele.dataset.url}/>
    );
  });
}

document.addEventListener("DOMContentLoaded", RefreshComponents);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
