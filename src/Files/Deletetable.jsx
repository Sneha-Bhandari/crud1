import React, { useState } from "react";
import Getmethod from '../Files/Getmethod'

const Deletetable = ({setDeletes}) => {
 
  
  return (
    <div className="flex flex-col gap-6  items-center justify-center bg-opacity-45">
      
      <div>
        <h1>Are you Sure? You Want to delete this</h1>
      </div>
      <div className="flex gap-8">
        <button className="bg-green-700 w-fit h-fit px-4 py-2 rounded-lg">
          Yes
        </button>
        <button
          className="bg-red-600 w-fit h-fit px-4 py-2 rounded-lg"
          onClick={() => {
            setDeletes(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Deletetable;
