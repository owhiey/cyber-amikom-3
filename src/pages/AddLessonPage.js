// import React from 'react';
// import { db, storage } from '../utils/firebase-config';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { useNavigate } from 'react-router-dom';
// import AddLessonInput from '../components/AddLessonInput';

// export default function AddLessonPage() {
//   const navigate = useNavigate();

//   const articlesCollectionRef = collection(db, 'lesson');

//   const addLessonHandler = async (lesson) => {
//     await addDoc(articlesCollectionRef, {
//       title: lesson.newTitle,
//       tag: lesson.newTag,
//     //   author: lesson.newAuthor,
//       createAt: new Date().toDateString(),
//       content: lesson.content,
//       timestamp: serverTimestamp()
//     //   duration: lesson.newDuration,
//     });
//     // console.log(addDoc());
//     navigate('/lesson');
//   };

//   export async function uploadfile(file) {
//     try {
//       const uniqueName = +new Date() + file.name;
//       const storageRef = ref(storage, `files/ ${uniqueName}`);
//       const uploadTask = await uploadBytes(storageRef,file);
//       const fileUrl = await getDownloadURL(uploadTask.ref);

//       return fileUrl;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <section className="container-big flex justify-center flex-col pt-4 bg-primary_background-darkgray01">
//       <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Add Content</h2>
//       <AddLessonInput addLesson={addLessonHandler} />
//     </section>
//   );
// }


import React from 'react';
import { db } from '../utils/firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import AddLessonInput from '../components/AddLessonInput';

export default function AddLessonPage() {
  const navigate = useNavigate();

  const articlesCollectionRef = collection(db, 'lesson');

  const addLessonHandler = async (lesson) => {
    await addDoc(articlesCollectionRef, {
      title: lesson.newTitle,
      tag: lesson.newTag,
    //   author: lesson.newAuthor,
      createAt: new Date().toDateString(),
      content: lesson.content,
      timestamp: serverTimestamp()
    //   duration: lesson.newDuration,
    });
    // console.log(addDoc());
    navigate('/lesson');
  };

  return (
    <section className="container-big flex justify-center flex-col pt-4 bg-primary_background-darkgray01">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">Add Content</h2>
      <AddLessonInput addLesson={addLessonHandler} />
    </section>
  );
}
