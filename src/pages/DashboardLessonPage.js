import React, {useState, useEffect} from "react";
import { Link, useSearchParams } from "react-router-dom";
import DashboardLessonListWrap from "../components/DashboardLessonListWrap";
import { db } from "../utils/firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import ContentListSelectBar from "../components/ContentListSelectBar";

function DashboardLessonPage() {
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

    const deleteArticle = async (id) => {
        const articleDoc = doc(db, 'lesson', id);
        await deleteDoc(articleDoc);
        const data = await getDocs(articlesCollectionRef);
        setContents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <section className="w-full h-auto bg-primary_background-darkgray02">
            <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
            <Link to="/dashboard/lesson/add">
                <button type="submit" className="btn-primary text-center">Tambah Materi Cyber</button>
            </Link>
            {/* <h2 className="text-2xl font-bold text-center"></h2> */}
            <ContentListSelectBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <DashboardLessonListWrap lessonValue={filteredContents} deleteArticle={deleteArticle}/>
            </div>
        </section>
    );
}

export default DashboardLessonPage;