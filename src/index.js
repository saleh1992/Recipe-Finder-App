import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SkeletonTheme baseColor="#f1f1f1" highlightColor="#ffffff7a">
    <React.StrictMode>
      <App />
      <div className="bg-slate-50">
        <Footer />
      </div>
    </React.StrictMode>
  </SkeletonTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
