import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PublisherReg from "./components/PublisherReg";
import AuthorReg from "./components/AuthorReg";
import PublisherSignIn from "./components/PublisherSignIn";
import AuthorSignIn from "./components/AuthorSignIn";
import Header from "./components/Header";
import Home from "./components/Home";
import BookReg from "./components/BookReg";
import PrivateRoute from "./components/PrivateRoute";
import { useContext } from "react";
import { auth } from "./components/Auth";

function App() {
  const userAuth = useContext(auth)
  return (
    <>
      <BrowserRouter>
       {!userAuth.user && !userAuth.tog && <Header/>}
        <Routes>
          <Route path="/publisher-reg" element={<PublisherReg />} />
          <Route path="/" element={<AuthorReg />} />
          <Route path="/author-signin" element={<AuthorSignIn />} />
          <Route path="/publisher-signin" element={<PublisherSignIn />} />
          <Route path="/home" element={<PrivateRoute/>}>
            <Route path="/home" element={<Home />}/>
          </Route>
          <Route path="/bookreg" element={<BookReg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
