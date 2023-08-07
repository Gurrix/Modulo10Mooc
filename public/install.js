'use strict';
let deferredInstalledPrompt = null;
const installButton = document.getElementById('buttonInstall');
installButton.addEventListener('click', installPWA);
window.addEventListener('beforinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt){
    deferredInstalledPrompt = evt;
    installButton.removeAttribute('hidden');

}

function installPWA(evt){
    deferredInstalledPrompt.prompt();
    evt.srcElement.setAtrribute('hidden', true);
    deferredInstalledPrompt.userChoice.then((choice)=>{
        if(choice.outcome == "accepted "){
            console.log("aceptado");
        }else console.log("rechazado")
        deferredInstalledPrompt = null;

    })
}
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log('App instalada')
}