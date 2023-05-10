import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Casino from "./pages/Casino";
import Casino2 from "./pages/Casino2";

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes history={history}>
        <Route path='/' element={<Home />} />
        <Route path='/casino/category/new' element={<Casino />} />
        <Route path='/casino/category/new/Popular' element={<Casino2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
