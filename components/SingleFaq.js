import React from "react";

const SingleFaq = (data) => {
  console.log(data.queation);

  return (
    <div>
      {data.map((iis) => (
        <div key={iis}>{iis.question} </div>
      ))}
    </div>
  );
};

export default SingleFaq;
