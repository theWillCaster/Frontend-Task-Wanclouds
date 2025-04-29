import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFormRecord } from '../Redux/formSlice';
import '../styles/recordsPage.css';

const RecordsPage = () => {
  const records = useSelector((state) => state.form || []);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteFormRecord(index));
  };

  return (
    <div className="records-page">
      <h2>Saved Records</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Company</th>
            <th>Telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records && records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
              <td>{record.firstName}</td>
              <td>{record.lastName}</td>
              <td>{record.address}</td>
              <td>{record.company}</td>
              <td>{record.telephone}</td>
              <td>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6">No records found.</td>
  </tr>
)}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsPage;
