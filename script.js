const onProgress = (event) => {
    const progressContainer = event.target.querySelector('.progress-container');
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
        setTimeout(() => {  progressContainer.classList.add('hide'); }, 0); //Possibility to keep the progressbar longer alive
        
    } else {
        progressContainer.classList.remove('hide');
        if (event.detail.totalProgress === 0) {
        event.target.querySelector('.center-pre-prompt').classList.add('hide');
        }
    }
    };
    document.querySelector('model-viewer').addEventListener('progress', onProgress);