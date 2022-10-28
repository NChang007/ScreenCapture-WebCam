let videoElem = document.querySelector("#video")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

start.addEventListener("click", (e) => {
    startCapture();
})

stop.addEventListener("click", (e) => {
    stopCapture();
})

let displayMediaOps = {
    video: {
        cursor: 'always'        
    },
    audio: 'false'
}


async function startCapture() {
    try{
        // this show your webCam
        // videoElem.srcObject = await navigator.mediaDevices.getUserMedia(displayMediaOps)
        // This shows your screen
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOps)
    }catch(error){
        console.log('Error at Catch' + error);
    }
}

function stopCapture(e) {
    let tracks = videoElem.srcObject.getTracks()

    tracks.forEach(track => track.stop())

    videoElem.srcObject = null
}