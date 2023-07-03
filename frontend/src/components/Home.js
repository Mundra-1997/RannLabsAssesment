import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Auth";
import axios from "axios";
import Doc from "./Doc";
import { baseURL } from "./baseURL/Baseurl";

const Home = () => {
  const navv = useNavigate();
  const userAuth = useContext(auth);
  const [val, setVal] = useState("");
  const [books, setBooks] = useState([]);
  const [nbooks, setNewBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${baseURL}/upload/book`);
      setBooks(response.data);
      setNewBooks(response.data);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  useEffect(() => {

    fetchBooks()
    
  }, []);

  function moveToUploadbook() {
    navv("/bookreg");
  }

  function handleLogout() {
    navv("/publisher-signin");
    userAuth.logout();
    userAuth.removeChange();
  }

  function moveToHome(){
    navv('/home')
  }

  function changeHandler(e){
    setVal(e.target.value)
    const filterData = books.filter((elem)=> {
     return  elem.title.toLowerCase().includes(val.toLowerCase())
    })

   setNewBooks(filterData)
  }
  return (
    <>
      <div className="header">
      <h2 className="logo" onClick={moveToHome}>Author & Publishers</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="searchbar"
            value={val}
            onChange={changeHandler}
          />
        </div>

        {userAuth.user && userAuth.tog && (
          <button className="upload" onClick={moveToUploadbook}>
            Upload Book
          </button>
        )}
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <h2 style={{ textAlign: "center" }}>Books</h2>
      <div className="card_wrapper">

        {
          nbooks.length > 0 ? 

          nbooks.map((item,i)=> {
            return <Doc item={item} key={i} />;
          }) :
           books.map((item,i)=> {
            return <Doc item={item} key={i} />;
          })
        }
       
      </div>
    </>
  );
};

export default Home;
