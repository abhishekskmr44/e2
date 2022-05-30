import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";
const Pagination = ({ pagenos, setpage }) => {
  // TODO: Remove below const and instead import them from chakra
  const { pageno, limit,total } = pagenos;
  const forupdate = (todochanges) => {
    setpage({
      ...pagenos,
      ...todochanges,
    });
  }
  return (
    <ButtonGroup>
      <Button onClick={() => forupdate({pageno:1})} data-cy="pagination-first-button">First</Button>
      <Button onClick={() => forupdate({pageno:pageno-1})}  data-cy="pagination-previous-button">Previous</Button>
      <Select value={limit} onChange={(e) => forupdate({limit:e.target.value})} data-cy="pagination-limit-select">
        <option value="3" data-cy="pagination-limit-3">
          3
        </option>
        <option value="6" data-cy="pagination-limit-6">
          6
        </option>
        <option value="9" data-cy="pagination-limit-9">
          9
        </option>
      </Select>
      <Button onClick={() => forupdate({pageno:pageno+1})} data-cy="pagination-next-button">Next</Button>
      <Button onClick={() => forupdate({pageno:Math.ceil(total/limit)})} data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;