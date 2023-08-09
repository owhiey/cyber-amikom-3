// import React, {useState, useEffect} from "react";
// import DashboardNewsListWrap from "../components/DashboardNewsListWrap";
// import { db } from "../utils/firebase-config";
// import { collection, getDocs, query, orderBy, limit, startAfter, deleteDoc, doc } from "firebase/firestore";

// function DashboardNewsPage() {
//     const [contents, setContents] = useState([])
//     const [lastDoc, setLastDoc] = useState()
//     const [isEmpty, setIsEmpty] = useState(false)

//     const articlesCollectionRef = collection(db, "news");

//     let newsQuery = query(articlesCollectionRef, orderBy("timestamp"), limit(2));

//     useEffect(() => {
//         const getContents = async () => {
//           const data = await getDocs(newsQuery)
//           const beritas = data.docs.map((berita) => ({...berita.data(), id: berita.id}))
//           const lastDoc = data.docs[data.docs.length - 1]
//           setContents(beritas);
//           setLastDoc(lastDoc);
//         }
//         getContents()
//     }, [])

//     const deleteArticle = async (id) => {
//         const articleDoc = doc(db, 'news', id);
//         await deleteDoc(articleDoc);
//         const data = await getDocs(articlesCollectionRef);
//         setContents(data.docs.map((berita) => ({ ...berita.data(), id: berita.id })));
//     };

//     function buttonHandler() {
//         newsQuery = query(articlesCollectionRef, orderBy("timestamp"), startAfter(lastDoc), limit(2));
//         const getContents = async () => {
//             const data = await getDocs(newsQuery)
//             const isCollectionEmpty = data.size === 0;
//             if (!isCollectionEmpty) {
//                 const beritas = data.docs.map((berita) => ({...berita.data(), id: berita.id}))
//                 const lastDoc = data.docs[data.docs.length - 1]
//                 setContents(contents => [...contents, ...beritas]);
//                 setLastDoc(lastDoc);
//             } else {
//                 setIsEmpty(true);
//             }
//           }
//           getContents()
//     }

//     if (contents.length === 0) {
//         return <h1>LOADING...</h1>
//     }

//     return (
//         <div className='blog-app'>
//             <h1>Berita</h1>
//             <DashboardNewsListWrap newsValue={contents} deleteArticle={deleteArticle}/>
//             <div className="load-more">
//                 <button onClick={buttonHandler}>Load More</button>
//             </div>
//             {isEmpty && <h1>no more data</h1>}
//         </div>
//     );
// }

// export default DashboardNewsPage;



import React, {useState, useEffect} from "react";
import DashboardNewsListWrap from "../components/DashboardNewsListWrap";
import { db } from "../utils/firebase-config";
import { 
    collection, 
    getDocs, 
    query, 
    orderBy, 
    limit, 
    deleteDoc, 
    doc 
} from "firebase/firestore";
import { Link } from "react-router-dom";

function DashboardNewsPage() {
    const [contents, setContents] = useState([])

    const articlesCollectionRef = collection(db, "news");

    // let newsQuery = query(articlesCollectionRef, orderBy("timestamp"), limit(2));

    useEffect(() => {
        const getContents = async () => {
          const data = await getDocs(articlesCollectionRef)
          setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        console.log(articlesCollectionRef)
        getContents()
    }, [])

    if (contents.length === 0) {
        return (
            <div className="container-big h-[calc(90vh-5rem)] flex flex-col justify-center items-center">
                <p className="text-xl text-center">LOADING...</p>
            </div>
        );
    }

    const deleteArticle = async (id) => {
        const articleDoc = doc(db, 'news', id);
        await deleteDoc(articleDoc);
        const data = await getDocs(articlesCollectionRef);
        setContents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <section className="w-full h-auto bg-primary_background-darkgray02">
            <div className='container-big w-full h-auto flex py-8 items-center flex-col gap-y-4'>
                {/* <h2 className="text-2xl font-bold text-center">Tambah Berita</h2> */}
                <Link to="/dashboard/berita/add">
                    <button type="submit" className="btn-primary text-center">Tambah Berita</button>
                </Link>
                <DashboardNewsListWrap newsValue={contents} deleteArticle={deleteArticle}/>
            </div>
        </section>
    );
}

export default DashboardNewsPage;