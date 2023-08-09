import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import LessonListWrap from "../components/LessonListWrap";
import ContentListSearchBar from "../components/ContentListSearchBar";
import { db } from "../utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ContentListSelectBar from "../components/ContentListSelectBar";

function LessonPage() {
    const [contents, setContents] = useState([])
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ keyword, setKeyword ] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });

    const articlesCollectionRef = collection(db, "lesson");

    useEffect(() => {
        const getContents = async () => {
          const data = await getDocs(articlesCollectionRef)
          setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
    
        getContents()
    }, [])

    async function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredContents = contents.filter((content) => {
        return content.tag.toLowerCase().includes(
          keyword.toLowerCase()
        );
    });

    return (
        <section className="w-full h-auto bg-primary_background-darkgray02">
            <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
            <h2 className="text-2xl font-bold text-center">Materi Cyber</h2>
            {/* <ContentListSearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} /> */}
            <ContentListSelectBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <LessonListWrap lessonValue={filteredContents}/>
            </div>
        </section>
    );
}

export default LessonPage;