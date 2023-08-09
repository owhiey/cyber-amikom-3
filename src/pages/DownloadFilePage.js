import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../utils/firebase-config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

function DownloadFilePage() {
    const [fileList, setFileList] = useState([])
    const [fileName, setFileName] = useState([])

    const fileListRef = ref(storage, "files/")

    useEffect(() => {
        listAll(fileListRef)
            .then((response) => {
                response.items.forEach((item) => {
                    // console.log(item);
                    // console.log(item.name);
                    setFileName((prev) => [...prev, item.name])
                    getDownloadURL(item)
                        .then((url) => {
                            setFileList((prev) => [...prev, url])
                        })
                })
            })
    }, [])

    console.log(fileName);
    console.log(fileList);

    return (
        <>
            <ul>
            {/* {fileList.map((url, name) => {
                // return <a href={url}>1</a>
                return  <li><a href={url}>{name}</a></li>
                // return  <li><img src={url} /></li>
            })} */}

            {fileList.map((url) => {
                return  <li><a href={url}>{url}</a></li>
            })}

            </ul>
            
        </>
    );
}

export default DownloadFilePage;