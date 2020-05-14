import React from "react";
import "./App.css";
import Blog from "./Components/Blog.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Router from "./Router"
import Header from "./Components/Header"

function App() {
  const sections = [
    { title: 'Home', url: '/' },
    { title: 'Instructors', url: '/instructors' },
    { title: 'Instruments', url: '/instruments' },
    { title: 'Become a Teacher', url: '/new' },
  ];
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header title="Austin Independent Music Instructors" sections={sections} />
      <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
