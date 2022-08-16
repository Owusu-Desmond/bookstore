import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
// Should display a button "Check status" only.

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories); // access the store state
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories-page">
      <p className="categories-page-content">{status}</p>
      <button type="button" onClick={() => handleStatus()}>Check status</button>
    </div>
  );
};

export default CategoriesPage;
