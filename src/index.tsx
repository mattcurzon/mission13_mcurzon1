import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TopBanner from "./pages/Home";
// import MovieList from "./pages/Movies"
// import Podcast from "./pages/Podcast"

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="podcast" element={<Podcast />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);