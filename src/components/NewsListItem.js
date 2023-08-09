import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';

function NewsListItem({ id, image, title, createAt, content }) {
  return (
    <div className="flex w-full h-auto min-h-[18rem] rounded-2xl overflow-hidden bg-primary_background-darkgray01">
      <div className="hidden sm:block md:w-1/5 h-auto bg-primary-blue"><img src={image} alt="card image"/></div>
      <div className="w-full md:w-4/5 h-auto p-8 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <h3 className="text-2xl font-bold truncate">
            <Link to={`/berita/${id}`}>{title}</Link>
          </h3>
          <p className="shrink-0 text-primary-blue font-light text-left sm:text-right">
            {createAt}
          </p>
        </div>
        <div className="content-list__item-overview font-montserrat">{parser(content)}</div>
        {/* <div>{HTMLReactParser(content)}</div> */}
      </div>
    </div>
  );
}

export default NewsListItem;