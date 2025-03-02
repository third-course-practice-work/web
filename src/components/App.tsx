import React, { useRef } from "react";

const App = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startCanvasProcessing = (stream: MediaStream) => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Function to continuously draw video + overlay on canvas
        const drawFrame = () => {
            if (!video.paused && !video.ended) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Overlay text
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText("Live Overlay Text", 50, 50);

                requestAnimationFrame(drawFrame);
            }
        };
        drawFrame();

        // Convert canvas to stream
        const newStream = canvas.captureStream();
        videoRef.current.srcObject = newStream;
    };

    const onClick = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                audio: false, // Set to `true` if you need audio
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Error capturing screen:", error);
        }
    };

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height: "auto" }}></video>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <input id="startCapture" onClick={onClick} type="button" value="Start Capture" />
        </div>
    );
};

export default App;
