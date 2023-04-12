import React from 'react';

const JobCategory = ({ category }) => {
  const { icon, title, jobs_available } = category;
  return (
    <div className='bg-indigo-50 text-center rounded-md p-2 md:p-5 py-4'>
      <div className='mb-8'>
        <img className='bg-indigo-100 mx-auto p-2 rounded-md' src={icon} alt="" />
      </div>
      <div>
        <p className='font-semibold '>{title}</p>
        <p className='text-sm  text-slate-400'>{jobs_available} Jobs Available</p>
      </div>
    </div>
  );
};

export default JobCategory;