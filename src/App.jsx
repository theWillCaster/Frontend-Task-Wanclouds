import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FormPage from './Pages/FormPage';
import RecordsPage from './Pages/RecordsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/records" element={<RecordsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;