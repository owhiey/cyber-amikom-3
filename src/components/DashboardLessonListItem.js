import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function LessonListItem({ id, tag, title, deleteArticle }) {
    return (
        <div className="flex items-center gap-1">
            {tag} |
            <span>
                <Link to={`/lesson/${id}`} className="hover:text-primary-blue"> {title}</Link>
            </span>
            <span>
                <DeleteButton id={id} deleteArticle={deleteArticle} />
            </span>
        </div>
    );
}

export default LessonListItem;