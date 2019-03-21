import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

function Paging({ totalPages, currentPage, increaseCount, decreaseCount }) {
  return (
    <h5 className={styles.Paging}>
      <button onClick={decreaseCount}>Prev</button>
      <span>Current Page: {currentPage}</span>
      <span>Total Pages: {totalPages}</span>
      <button onClick={increaseCount}>Next</button>
    </h5>
  );
}

Paging.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired  
};


export default Paging;
