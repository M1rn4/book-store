import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/categories.css';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <section className="categories">
      <button type="button" className="btn-status" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h1>{categories}</h1>
    </section>
  );
};

export default Categories;
