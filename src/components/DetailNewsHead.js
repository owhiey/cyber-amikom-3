import React from 'react';

function DetailNewsHead({ title, createAt, image }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl text-center sm:text-left mb-4">{title}</h1>
      {/* <p className="font-bold text-base mb-4">{createAt}</p> */}
      <p className="w-fit text-sm font-light mb-4">{createAt}</p>
      <div className="flex justify-between sm:justify-start gap-x-4">
        {/* <p className="w-fit text-sm font-light">{duration} min to read</p> */}
        <img src={image} alt='gambar detail berita' /> <br />
      </div>
    </div>
  );
}

export default DetailNewsHead;
