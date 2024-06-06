const videoElement = document.getElementById("video");
const button = document.getElementById("button")

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStream)
    }catch (error) {
        console.log('ooops error', error)
    }
}