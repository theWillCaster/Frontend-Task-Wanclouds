import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormRecord } from '../Redux/formSlice';
import '../styles/formPage.css';

const FormPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    company: '',
    telephone: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => field.trim() === '')) {
      alert('Please fill all fields.');
      return;
    }
    dispatch(addFormRecord(formData));
    setFormData({ firstName: '', lastName: '', address: '', company: '', telephone: '' });
  };

  return (
    <div className="form-page">
      <h2>Add New Record</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
        <input name="telephone" placeholder="Telephone Number" value={formData.telephone} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
