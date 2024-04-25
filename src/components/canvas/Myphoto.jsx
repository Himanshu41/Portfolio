import React from 'react';
import { himanshu } from '../../assets';

const Myphoto = () => {
  return (
    <div className="text-center p-4 justify-center">
      <img
        src={himanshu}
        alt="Himanshu"
        className="sm:w-[30%] w-[38%] h-auto border-4 border-yellow-300 rounded-[15%] mt-[20%] sm:mt-[7%] ml-[4%]"
      />
    </div>
  );
};

export default Myphoto;



