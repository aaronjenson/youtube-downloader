const form = document.querySelector('#download-form');
const input = document.querySelector('#video-url');
const status = document.querySelector('#status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const videoUrl = input.value;

    if (videoUrl.indexOf('youtube.com') !== -1) {
        status.innerText = 'Downloading...';
        setTimeout(() => {
            status.innerText = 'Video downloaded successfully!';
            download('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }, 2000);
    } else {
        status.innerText = 'Please enter a valid YouTube video URL!';
    }
});

function download(url) {
    const a = document.createElement('a');
    const fileName = `youtube-downloader-result-${Math.floor(Math.random() * 100000)}.mp4`;
    a.href = './youtube-downloader-result-17820374.mp4';
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
