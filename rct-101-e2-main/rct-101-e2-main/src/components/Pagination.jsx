import React from "react";

import styles from './button.module.css'
const Pagination = ({page,setPage,limit,setLimit,totalcount}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <div className={styles.button}>
      {page}
      <button data-cy="pagination-first-button" onClick={()=>{
        setPage(1)
      }}>First</button>
      <button data-cy="pagination-previous-button" 
      // disabled={page=1}
      onClick={()=>{
        if(page>1){
          
          setPage(page-1)
        }
      }}>previous</button>
      <select data-cy="pagination-limit-select" onChange={(e)=>setLimit(Number(e.target.value))}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </select>
      <button data-cy="pagination-next-button"
        // disabled = {totalcount <= page*limit}
        onClick={() => setPage(page + 1)}
      >Next</button>
      <button data-cy="pagination-last-button" 
      // disabled={totalcount<=page*limit}
      onClick={()=>{
        setPage(page*limit)
      }}>Last</button>
    </div>
  );
};

export default Pagination;