import React from "react";
import { useState } from "react";
import { storage } from "../utils/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function UploadFilePage() {
    const [ fileUpload, setFileUpload ] = useState(null);

    function uploadFile() {
        if (fileUpload == null) return;

        const fileRef = ref(storage, `files/${v4() + fileUpload.name}`);

        uploadBytes(fileRef, fileUpload).then(() => {
            alert("File berhasil diunggah");
        });
    }

    return (
        <>
            <div className="UploadFile">
                <input type="file" onChange={(event) => {
                    setFileUpload(event.target.files[0]);
                }}/>
                <button onClick={uploadFile}>Upload File</button>
            </div>
        </>
    );
}

export default UploadFilePage;