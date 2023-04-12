import React from "react";

const Question = ({ singleQuestion }) => {
  const { question, answer } = singleQuestion;
  return (
    <div className="border bg-zinc-300 hover:bg-sky-400  rounded-md p-2 md:p-5 flex flex-col gap-3">
      <p>
        <span className="font-bold  bg-stone-500 rounded-md p-1 ">
          Question: 
        </span>
        <span className="ml-2 font-bold text-1xl text-zinc-950">{question}</span>
        
      </p>
      <p>
        <span className="font-bold text-green-600">Answer: </span>
         {answer}
      </p>
    </div>
  );
};

export default Question;
