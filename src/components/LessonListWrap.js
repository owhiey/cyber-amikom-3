import React from "react";
import LessonListItem from "./LessonListItem";

function LessonListWrap({lessonValue}) {
    // menampilkan list UI sejumlah item array menggunakan perulangan array map
    return (
        <div className="w-full h-auto flex flex-col">
            {
                lessonValue.map((lesson) => (
                    <LessonListItem {...lesson} key={lesson.id}/>
                ))
            }
        </div>
    );
}

export default LessonListWrap;