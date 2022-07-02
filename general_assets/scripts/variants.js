const modelViewerVariants = document.querySelector("model-viewer#model");
const select = document.querySelector('#input');

modelViewerVariants.addEventListener('load', () => {
  const names = modelViewerVariants.availableVariants;
  for (const name of names) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  }
  // Adds a default option.
  const option = document.createElement('option');
    option.value = 'default';
    option.textContent = 'Default';
    select.appendChild(option);
});

select.addEventListener('input', (event) => {
  modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
});



const onProgress = (event) => {
    const userInput = event.target.querySelector('#input');

    if (event.detail.visible === 1) {
        userInput.classList.add('hide');
        
    } else {
        userInput.classList.remove('hide');

    }
    };
    document.querySelector('model-viewer').addEventListener('progress', onProgress);