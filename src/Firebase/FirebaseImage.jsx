import React, { useState } from "react";
import { imageDb } from "./Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./fireBase.css";
import { BsCloudUpload } from "react-icons/bs"
import { CiPause1 } from "react-icons/ci";
import { RxResume } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

export default function FirebaseImage({ setImgLien }) {
  const [img, setImg] = useState(null);
  const [time, setTime] = useState(0);
  const [uploadTask, setUploadTask] = useState(null);

  const metadata = {
    contentType: "image/jpeg",
  };

  const style = {
    width: `${time}%`,
  };

  const handleClick = () => {
    if (!img) {
      alert("Please select an image first.");
      return;
    }

    const imgRef = ref(imageDb, `uploads/${v4()}`);
    const newUploadTask = uploadBytesResumable(imgRef, img, metadata);
    setUploadTask(newUploadTask);

    newUploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setTime(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            alert("Unauthorized access!");
            break;
          case "storage/canceled":
            alert("Upload canceled!");
            break;
          case "storage/unknown":
            alert("Unknown error occurred!");
            break;
        }
      },
      () => {
        getDownloadURL(newUploadTask.snapshot.ref).then((downloadURL) => {
          setImgLien(downloadURL);
          alert("Image uploaded successfully!");
        });
      }
    );
  };

  const pauseUpload = () => {
    if (uploadTask) {
      uploadTask.pause();
    }
  };

  const resumeUpload = () => {
    if (uploadTask) {
      uploadTask.resume();
    }
  };

  const cancelUpload = () => {
    if (uploadTask) {
      uploadTask.cancel();
    }
  };

  return (
    <div className="">
      <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="file"
        id="imgg"
        onChange={(e) => setImg(e.target.files[0])}
      />
      <button
        onClick={handleClick}
        className="mt-3 py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none rounded border border-gray-200 hover:bg-slate-50 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
        <BsCloudUpload  size={25}/>
      </button>
      <div className="bar">
        <div className="progress " style={style}>
          <div className="text-center">{Math.floor(time) + "%"}</div>
        </div>
      </div>
      <div className="gap-3 flex justify-center">
        <button
          className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none rounded-lg border border-gray-200 hover:bg-slate-50 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={pauseUpload}
        >
         <CiPause1  size={25}/>
        </button>
        <button
          className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none rounded border border-gray-200 hover:bg-slate-50 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={resumeUpload}
        >
         <RxResume size={25} />
        </button>
        <button
          className="py-1 px-2 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none rounded border border-gray-200 hover:bg-slate-50 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={cancelUpload}
        >
         <MdOutlineCancel size={25} />
        </button>
      </div>
    </div>
  );
}
