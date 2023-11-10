import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { InputChangeEvent } from '../types/types';

const VideoPlayer = () => {
    const [ytVideo, setYtVideo] = useState("a3xoAZpm_0A");

    const change = (e: InputChangeEvent) => {
        setYtVideo(e.target.value);
    }

    return (
        <div>
            Youtube video ID (whatever comes after v=): <input type="text" onChange={change} value={ytVideo}></input>
            {/* <YouTube videoId={ytVideo} /> */}
        </div>
    );
}

export default VideoPlayer;