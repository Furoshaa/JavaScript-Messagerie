// Ecouteur d'evenement sur le bouton avec querySelector
document.querySelector('button').addEventListener('click', Deplacer);

function Deplacer() {
    // Recupere la textarea avec getElementById
    const textarea = document.getElementById('clavier');
    const message = textarea.value;

    // Verifie si le message n'est pas vide
    if (message === '') {
        alert('Veuillez saisir un texte');
        return;
    }

    // Recupere la div d'affichage avec getElementById
    const affichage = document.getElementById('affichage');
    
    // Cree une nouvelle div avec createElement
    const newMessage = document.createElement('div');
    
    // Utilise innerHTML pour ajouter le contenu
    newMessage.innerHTML = message;
    
    // Utilise appendChild pour ajouter le message
    affichage.appendChild(newMessage);
    
    // Vide la textarea
    textarea.value = '';
}