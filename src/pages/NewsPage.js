import React, {useState, useEffect} from "react";
import NewsListWrap from "../components/NewsListWrap";
import { db } from "../utils/firebase-config";
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";

function NewsPage() {
    const [contents, setContents] = useState([])
    const [lastDoc, setLastDoc] = useState()
    const [isEmpty, setIsEmpty] = useState(false)

    const articlesCollectionRef = collection(db, "news");

    let newsQuery = query(articlesCollectionRef, orderBy("timestamp"), limit(2));

    useEffect(() => {
        const getContents = async () => {
          const data = await getDocs(newsQuery)
          const beritas = data.docs.map((berita) => ({...berita.data(), id: berita.id}))
          const lastDoc = data.docs[data.docs.length - 1]
          setContents(beritas);
          setLastDoc(lastDoc);
        //   setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        // console.log(beritas)
        getContents()
    }, [])

    function buttonHandler() {
        newsQuery = query(articlesCollectionRef, orderBy("timestamp"), startAfter(lastDoc), limit(2));
        const getContents = async () => {
            const data = await getDocs(newsQuery)
            const isCollectionEmpty = data.size === 0;
            if (!isCollectionEmpty) {
                const beritas = data.docs.map((berita) => ({...berita.data(), id: berita.id}))
                const lastDoc = data.docs[data.docs.length - 1]
                setContents(contents => [...contents, ...beritas]);
                setLastDoc(lastDoc);
              //   setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            } else {
                setIsEmpty(true);
            }
          }
          // console.log(beritas)
          getContents()
    }

    if (contents.length === 0) {
        return (
        <div className="container-big h-[calc(90vh-5rem)] flex flex-col justify-center items-center">
            <p className="text-xl text-center">LOADING...</p>
        </div>
        );
    }

    return (
        <section className="w-full h-auto bg-primary_background-darkgray02">
            <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
                <h2 className="text-2xl font-bold text-center">Berita</h2>
                <NewsListWrap newsValue={contents}/>
                <div className="load-more">
                    <button onClick={buttonHandler}>Load More</button>
                </div>
                {isEmpty && <h1>no more data</h1>}
            </div>
        </section>
    );
}

export default NewsPage;


// import React, {useState, useEffect} from "react";
// import NewsListWrap from "../components/NewsListWrap";
// import { db } from "../utils/firebase-config";
// import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

// function NewsPage() {
//     const [contents, setContents] = useState([])

//     const articlesCollectionRef = collection(db, "news");

//     let newsQuery = query(articlesCollectionRef, orderBy("timestamp"), limit(2));

//     useEffect(() => {
//         const getContents = async () => {
//           const data = await getDocs(newsQuery)
//           setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
//         }
//         console.log(newsQuery)
//         getContents()
//     }, [])

//     function buttonHandler() {
        
//     }

//     return (
//         <div className='blog-app'>
//             <h1>Berita</h1>
//             <NewsListWrap newsValue={contents}/>
//             <div className="load-more">
//                 <button onClick={buttonHandler}>Load More</button>
//             </div>
//         </div>
//     );
// }

// export default NewsPage;