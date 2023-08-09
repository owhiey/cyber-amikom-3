import React from 'react';
import { db } from '../utils/firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import AddNewsInput from '../components/AddNewsInput';

export default function AddNewsPage() {
  const navigate = useNavigate();

  const articlesCollectionRef = collection(db, 'news');

  const addNewsHandler = async (news) => {
    await addDoc(articlesCollectionRef, {
      title: news.newTitle,
      image: news.newImage,
    //   author: news.newAuthor,
      createAt: new Date().toDateString(),
      content: news.content,
      timestamp: serverTimestamp()
    //   duration: news.newDuration,
    });
    // console.log(addDoc());
    navigate('/berita');
  };

  return (
    <section className="container-big flex justify-center flex-col pt-4 bg-primary_background-darkgray01">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Add Content</h2>
      <AddNewsInput addNews={addNewsHandler} />
    </section>
  );
}
