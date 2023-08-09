import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import ContentLessonDetail from '../components/ContentLessonDetail';

function LessonDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, 'lesson', id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };
  return (
    <div className="container-big w-full h-auto py-8">
      <ContentLessonDetail
        title={blog?.title}
        tag={blog?.tag}
        // image={blog?.image}
        createAt={blog?.createAt}
        content={blog?.content || ''}
        // duration={blog?.duration}
      />
    </div>
  );
}

export default LessonDetailPage;
