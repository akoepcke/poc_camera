import { useRef, useEffect } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

const RecordView = () => {

  return (
   <div className="p-4">
     <div className="border-2">
        <ReactMediaRecorder
          video
          audio={false}
          blobPropertyBag={{
            type: "video/mp4"
         }}
         askPermissionOnMount={true}
         facingMode="environment"
          render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
            <div>
              <p>status: {status}</p>
              <div className="grid grid-cols-2 gap-2 my-4">
                <button onClick={startRecording} className="p-2 border border-gray-500 rounded">Start Recording</button>
                <button onClick={stopRecording} className="p-2 border border-gray-500 rounded">Stop Recording</button>
              </div>
              <video src={mediaBlobUrl} controls autoPlay />
              <video ref={previewStream} width={500} height={500} autoPlay controls />
            </div>
          )}
        />
     </div>
   </div>
  );
};

export default RecordView