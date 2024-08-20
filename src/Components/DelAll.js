import React from "react";

function DeleteProd({delAll }) {
  return (
    <div>
      <button
        onClick={() =>delAll()}
        >
        Clear All
      </button>
    </div>
  );
}

export default DeleteProd;