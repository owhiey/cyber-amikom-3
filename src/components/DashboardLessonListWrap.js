import React from "react";
import DashboardLessonListItem from "./DashboardLessonListItem";

function DashboardLessonListWrap({lessonValue, deleteArticle}) {
    // menampilkan list UI sejumlah item array menggunakan perulangan array map
    return (
        <div className="w-full h-auto flex flex-col">
            {
                lessonValue.map((lesson) => (
                    <DashboardLessonListItem {...lesson} key={lesson.id} deleteArticle={deleteArticle}/>
                ))
            }
        </div>
    );
}

export default DashboardLessonListWrap;