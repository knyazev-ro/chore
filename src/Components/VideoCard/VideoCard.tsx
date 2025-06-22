import {
  MicrophoneIcon,
  VideoCameraIcon,
  VideoCameraSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaMicrophoneSlash } from "react-icons/fa";

export default function VideoCard() {
  const [viewCamera, setViewCamera] = useState(false);
  const [muteVoice, setMuteVoice] = useState(false);

  return (
    <div className="w-64 h-42 bg-stone-100 border-3 img flex flex-col justify-end">
      <div className="bg-stone-100/10 h-12 items-center flex px-4 justify-between comfortaa text-md backdrop-blur-xs">
        <div>Miguel O Hara</div>
        <div>
          <div className="gap-2 flex items-center">
            <div
              className="cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMuteVoice((p) => !p)}
            >
              {muteVoice ? (
                <MicrophoneIcon className="w-5 h-5" />
              ) : (
                <FaMicrophoneSlash className="w-5 h-5" />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setViewCamera((p) => !p)}
            >
              {viewCamera ? (
                <VideoCameraIcon className="w-5 h-5" />
              ) : (
                <VideoCameraSlashIcon className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
