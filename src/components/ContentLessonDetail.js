import React from "react";
import HTMLReactParser from "html-react-parser";

function ContentLessonDetail({ title, tag, createAt, content }) {
    return (
        <div className="w-full">
            <p className="font-bold text-base mb-4">Tag : {tag}</p>
            <div className="flex justify-between sm:justify-start gap-x-4">
                <p className="w-fit text-sm font-light">{createAt}</p>
            </div>
            <h1 className="font-bold text-3xl text-center sm:text-left mb-4">{title}</h1>
            <div className="text-lg font-montserrat">{HTMLReactParser(content)}</div>
        </div>
    );
}

export default ContentLessonDetail;