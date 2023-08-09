import { Editor } from 'react-draft-wysiwyg';
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import useInput from '../hooks/useInput';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

export default function AddNewsInput({ addNews }) {
  const [newTitle, titleChangeHandler] = useInput('');
//   const [newAuthor, authorChangeHandler] = useInput('');
  const [newImage, imageChangeHandler] = useInput('');
  const [newContent, setNewContent] = useState('');
//   const [newDuration, durationChangeHandler] = useInput(0);

  function contentChangeHandler(body) {
    setNewContent(body);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const content = draftToHtml(convertToRaw(newContent.getCurrentContent()));
    addNews({ newTitle, newImage, content });
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
        Image
      </label>
      <input
        className="w-full bg-primary_background-darkgray01 px-4 py-2 rounded-md focus:outline-primary-blue"
        type="text"
        name="image"
        id="image"
        placeholder="Input image URL here"
        onChange={imageChangeHandler}
        value={newImage}
        required
      />
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
