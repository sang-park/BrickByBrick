import { TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeWrapperProps {
    setYtPlayer: (player: any) => void;
}

function YoutubeWrapper({ setYtPlayer }: YoutubeWrapperProps) {
    const [youtubeId, setYoutubeId] = useState<string>("");
    const playerRef = useRef<any>(null);

    const handleKeyDown = (e: any) => {
        if (!playerRef.current) {
            return;
        }
        const currentTime = playerRef.current.getCurrentTime();

        switch (e.code) {
            case 'ArrowRight':
                playerRef.current.seekTo(currentTime + 5, true);
                break;
            case 'ArrowLeft':
                playerRef.current.seekTo(currentTime - 5, true);
                break;
            case 'ArrowUp':
                playerRef.current.setVolume(playerRef.current.getVolume() + 10);
                break;
            case 'ArrowDown':
                playerRef.current.setVolume(playerRef.current.getVolume() - 10);
                break;
            case 'Space':
                e.preventDefault();
                // 1 is playing
                playerRef.current.getPlayerState() === 1 ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
        playerRef.current = event.target;
        setYtPlayer(playerRef);
    }

    const handlePlay = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const handlePause = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
        }
    };

    const handleRewind = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime - 5, true);
        }
    };

    const handleForward = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime + 5, true);
        }
    };

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <TextField
                id="standard-basic"
                label="yt id (whatever comes after v=)"
                variant="outlined"
                value={youtubeId}
                onChange={e => setYoutubeId(e.target.value)}
            />
            <YouTube videoId={youtubeId} opts={opts} onReady={onPlayerReady} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleRewind}>Rewind 5s</button>
            <button onClick={handleForward}>Forward 5s</button>
        </div>
    );
}

export default YoutubeWrapper;