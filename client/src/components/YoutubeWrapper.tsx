import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

interface YoutubeWrapperProps {
    setYtPlayer: (player: any) => void;
}

function YoutubeWrapper({ setYtPlayer }: YoutubeWrapperProps) {
    const playerRef = useRef<any>(null);

    const handleKeyDown = (e: any) => {
        if (!playerRef.current) {
            return;
        }
        e.preventDefault();
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

    const onPlayerReady = (event: any) => {
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

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <YouTube videoId="QVOUKUDD4GU" opts={opts} onReady={onPlayerReady} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleRewind}>Rewind 5s</button>
            <button onClick={handleForward}>Forward 5s</button>
        </div>
    );
}

export default YoutubeWrapper;