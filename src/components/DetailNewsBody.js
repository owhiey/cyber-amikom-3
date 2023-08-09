import HTMLReactParser from 'html-react-parser';
import React from 'react';

function DetailNewsBody({ content }) {
  return (
    <div className="w-full">
      {/* <h1 className="font-bold text-3xl text-center sm:text-left mb-4">{title}</h1> */}
      <div className="text-lg font-montserrat">{HTMLReactParser(content)}</div>
    </div>
  );
}

export default DetailNewsBody;
