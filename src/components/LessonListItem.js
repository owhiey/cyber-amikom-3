import React from "react";
import { Link } from "react-router-dom";

function LessonListItem({ id, tag, title }) {
    return (
        <div>
            {tag} |
            <span>
                <Link to={`/lesson/${id}`} className="hover:text-primary-blue"> {title}</Link>
            </span>
        </div>
    );
}

export default LessonListItem;