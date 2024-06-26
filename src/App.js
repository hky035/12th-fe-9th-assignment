import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Layout from "./layouts/Layout";
import Introduction from "./components/Introduction";
import Goal from "./components/Goal";
import Notice from "./components/Notice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Introduction />} />
            <Route path="goal" element={<Goal />} />
            <Route path="notice" element={<Notice/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
