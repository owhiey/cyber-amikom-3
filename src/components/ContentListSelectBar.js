import React from "react";

function ContentListSelectBar({ keyword, keywordChange }) {
    return (
        <>
            <select 
                id="Tag" 
                value={keyword} 
                // onChange={tagChangeHandler}
                onChange={(event) => keywordChange(event.target.value)}
                className="w-full h-fit text-xl my-4 py-2 px-6 rounded-full bg-primary_background-darkgray01 "
                type="text"
                name="Tag"
                required>
                <option value="" defaultValue>ALL</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
                <option value="PHP">PHP</option>
            </select>
            {/* <input
                className="w-full h-fit text-xl my-4 py-2 px-6 rounded-full bg-primary_background-darkgray01 "
                type="text"
                placeholder="Search..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}
            /> */}
        </>
    );
}

export default ContentListSelectBar;