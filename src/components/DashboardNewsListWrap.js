import React from "react";
import DashboardNewsListItem from './DashboardNewsListItem';

function DashboardNewsListWrap({newsValue, deleteArticle}) {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-y-8">
            {newsValue.map((news) => (
                <DashboardNewsListItem key={news.id} {...news} deleteArticle={deleteArticle} />
            ))}
        </div>
    );
}

export default DashboardNewsListWrap;