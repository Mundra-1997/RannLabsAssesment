import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from './baseURL/Baseurl';

const BookReg = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [numAuthors, setNumAuthors] = useState(0);
  const [remark, setRemark] = useState('');
  const [document, setDocument] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    setDocument(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('numAuthors', numAuthors);
    formData.append('remark', remark);
    formData.append('document', document);

    try {
      await axios.post(`${baseURL}/upload/book`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
   
      setTitle('');
      setSummary('');
      setNumAuthors(0);
      setRemark('');
      setDocument(null);
      
      navigate('/home')
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  return (
    <div className='book_container'>
    <form  onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
      </label>
      <br />
      <label>
        Summary:
        <textarea value={summary} onChange={(event) => setSummary(event.target.value)} required />
      </label>
      <br />
      <label>
        Number of Authors:
        <input type="number" value={numAuthors} onChange={(event) => setNumAuthors(event.target.value)} required />
      </label>
      <br />
      <label>
        Remark:
        <textarea value={remark} onChange={(event) => setRemark(event.target.value)} />
      </label>
      <br />
      <label>
        Document (Word file):
        <input type="file" accept=".doc, .docx" onChange={handleFileChange} required />
      </label>
      <br />
      <button type="submit" className='butn'>Submit</button>
    </form>
    </div>
  );
};

export default BookReg;
