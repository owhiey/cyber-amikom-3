import React from "react";
import NewsListItem from "./NewsListItem";

function NewsListWrap({newsValue}) {
    // menampilkan list UI sejumlah item array menggunakan perulangan array map
    return (
        <div className="w-full h-auto flex flex-col items-center gap-y-8">
            {
                newsValue.map((news) => (
                    <NewsListItem {...news} key={news.id}/>
                ))
            }
        </div>
    );
}

export default NewsListWrap;