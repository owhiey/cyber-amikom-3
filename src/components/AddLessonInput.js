// import { Editor } from 'react-draft-wysiwyg';
// import React, { useRef, useState } from 'react';
// import { GoPlus } from 'react-icons/go';
// import useInput from '../hooks/useInput';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import { convertToRaw } from 'draft-js';

// export default function AddLessonInput({ addLesson }) {
//   const [newTitle, titleChangeHandler] = useInput('');
// //   const [newAuthor, authorChangeHandler] = useInput('');
//   const [newTag, tagChangeHandler] = useInput('HTML');
//   const [newContent, setNewContent] = useState('');
// //   const [newDuration, durationChangeHandler] = useInput(0);

//   const [filePreview, setFilePreview] = useState("");
//   const uploadFile = useRef(null);

//   function handleFile() {
//     const filePath = URL.createObjectURL(uploadFile.current.files[0]);
//     setFilePreview(filePath)
//   }

//   function contentChangeHandler(body) {
//     setNewContent(body);
//   }

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const content = draftToHtml(convertToRaw(newContent.getCurrentContent()));
//     addLesson({ newTitle, newTag, content });
//   };

//   const fileUrl = await uploadFile

//   return (
//     <form
//       onSubmit={submitHandler}
//       className="mx-auto flex justify-center flex-col bg-primary_background-darkgray02 px-4 sm:px-16 py-8 mb-8 shadow-md w-full h-auto lg:h-fit rounded-xl"
//     >
//       <label className="font-semibold block my-2 text-md" htmlFor="title">
//         Title
//       </label>
//       <input
//         className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
//         type="text"
//         name="title"
//         id="title"
//         placeholder="Input title here"
//         onChange={titleChangeHandler}
//         value={newTitle}
//         required
//       />
//       <label className="font-semibold block my-2 text-md" htmlFor="title">
//         Tag
//       </label>
//       <select 
//         id="Tag" 
//         value={newTag} 
//         onChange={tagChangeHandler}
//         className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
//         type="text"
//         name="Tag"
//         required>
//         <option value="HTML" defaultValue>HTML</option>
//         <option value="CSS">CSS</option>
//         <option value="JS">JS</option>
//         <option value="PHP">PHP</option>
//       </select>
//       <label className="font-semibold block my-2 text-md">Content</label>
//       <Editor
//         editorState={newContent}
//         toolbarClassName="toolbarClassName text-black"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName w-full min-h-[12rem] bg-primary_background-darkgray01 px-4 py-2 rounded-md"
//         onEditorStateChange={contentChangeHandler}
//       />
//       <div className="form-control">
//         <input type='file' onChange={handleFile} ref={uploadFile}/>
//       </div>
//       {filePreview.length > 0 && <img className='h-auto' src={filePreview} alt='preview'/>}
//       <button type="submit" className="btn-primary w-full sm:w-2/3 mx-auto mt-6">
//         <GoPlus className="my-auto" />
//         <p>
//           Add Content <span className="hidden sm:inline"> and Publish</span>
//         </p>
//       </button>
//     </form>
//   );
// }



import { Editor } from 'react-draft-wysiwyg';
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import useInput from '../hooks/useInput';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

export default function AddLessonInput({ addLesson }) {
  const [newTitle, titleChangeHandler] = useInput('');
//   const [newAuthor, authorChangeHandler] = useInput('');
  const [newTag, tagChangeHandler] = useInput('HTML');
  const [newContent, setNewContent] = useState('');
//   const [newDuration, durationChangeHandler] = useInput(0);

  function contentChangeHandler(body) {
    setNewContent(body);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(newContent.getCurrentContent()));
    addLesson({ newTitle, newTag, content });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex justify-center flex-col bg-primary_background-darkgray02 px-4 sm:px-16 py-8 mb-8 shadow-md w-full h-auto lg:h-fit rounded-xl"
    >
      <label className="font-semibold block my-2 text-md" htmlFor="title">
        Title
      </label>
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="title"
        id="title"
        placeholder="Input title here"
        onChange={titleChangeHandler}
        value={newTitle}
        required
      />
      <label className="font-semibold block my-2 text-md" htmlFor="title">
        Tag
      </label>
      <select 
        id="Tag" 
        value={newTag} 
        onChange={tagChangeHandler}
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="Tag"
        required>
        <option value="HTML" defaultValue>HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
        <option value="PHP">PHP</option>
      </select>
      {/* <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="Tag"
        id="Tag"
        placeholder="Input Tag here"
        onChange={tagChangeHandler}
        value={newTag}
        required
      /> */}
      <label className="font-semibold block my-2 text-md">Content</label>
      <Editor
        editorState={newContent}
        toolbarClassName="toolbarClassName text-black"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName w-full min-h-[12rem] bg-primary_background-darkgray01 px-4 py-2 rounded-md"
        onEditorStateChange={contentChangeHandler}
      />
      {/* <label className="font-semibold block my-2 text-md" htmlFor="duration">
        Minute Read
      </label>
      <input
        className="w-full md:w-1/4 bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="number"
        name="duration"
        id="duration"
        placeholder="Input read duration here"
        onChange={durationChangeHandler}
        value={newDuration}
        required
      /> */}
      <button type="submit" className="btn-primary w-full sm:w-2/3 mx-auto mt-6">
        <GoPlus className="my-auto" />
        <p>
          Add Content <span className="hidden sm:inline"> and Publish</span>
        </p>
      </button>
    </form>
  );
}
