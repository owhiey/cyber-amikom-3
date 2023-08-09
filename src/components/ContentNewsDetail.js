import React from 'react';
import DetailNewsHead from '../components/DetailNewsHead';
import DetailNewsBody from '../components/DetailNewsBody';

function ContentNewsDetail({ image, createAt, title, content }) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-8">
      <DetailNewsHead title={title} image={image} createAt={createAt} />
      <DetailNewsBody content={content} />
    </div>
  );
}

export default ContentNewsDetail;
