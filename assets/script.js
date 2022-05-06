customElements.whenDefined( 'model-viewer' ).then( () => {  
    var ModelViewer= document.querySelector('model-viewer').shadowRoot;
    ModelViewer.querySelector('#view_x5F_in_x5F_AR_x5F_icon').style.display = "none";
} )