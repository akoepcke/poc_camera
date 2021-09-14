import { useRef, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {

  return (
   <div className="p-4">
      <ReactMediaRecorder
        video
        audio={false}
        blobPropertyBag={{
          type: "video/mp4"
       }}
       askPermissionOnMount={true}
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>status: {status}</p>
            <div className="grid grid-cols-2 gap-2 my-4">
              <button onClick={startRecording} className="p-2 border border-gray-500 rounded">Start Recording</button>
              <button onClick={stopRecording} className="p-2 border border-gray-500 rounded">Stop Recording</button>
            </div>
            <video src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
   </div>
  );
};

export default RecordView