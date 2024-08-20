import React from "react";
function DeleteProd({delRow,  row }) {
  return (
    <div>
      <button
        onClick={() =>delRow(row)}
        >
        X
      </button>
    </div>
  );
}

export default DeleteProd;
