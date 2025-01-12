// Ecouteur d'evenement sur le bouton avec querySelector
document.querySelector('button').addEventListener('click', Deplacer);

// Lance un script "ModifierAspectClavier" au chargement de la page
window.addEventListener('load', ModifierAspectClavier); 

// Compteur de message
let compteur = 0;

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

    // Ajoute une classe a la div
    if (compteur % 2 === 0) {
        newMessage.classList.add('texte', 'gauche');
    } else {
        newMessage.classList.add('texte', 'droite');
    }

    // Incremente le compteur
    compteur++;
    
    // Utilise appendChild pour ajouter le message
    affichage.appendChild(newMessage);
    
    // Vide la textarea
    textarea.value = '';
};

function ModifierAspectClavier() {
    // Recupere la textarea avec getElementById
    const textarea = document.getElementById('clavier');
    
    // Modifie la taille de la textarea
    textarea.style.width = '50%';
    textarea.style.minWidth = '400px';
    textarea.style.overflow = 'auto';
    textarea.style.resize = 'vertical';
};

///////////////////////////// Le code suivant n'est pas demandé dans l'exercice //////////////////////////////
///////////////// Je l'ai simplement ajouté moi meme pour rendre le projet plus sympa a voir /////////////////

// Ecouteur d'evenement sur la touche entré du clavier
document.getElementById('clavier').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        Deplacer();
    }
});

// Faire descendre la scrollbar automatiquement
document.getElementById('affichage').addEventListener('DOMNodeInserted', function() {
    document.getElementById('affichage').scrollTop = document.getElementById('affichage').scrollHeight;
});