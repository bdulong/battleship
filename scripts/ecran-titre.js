document.addEventListener('DOMContentLoaded', function() {
    var boutonJouer = document.querySelector('.bouton__jouer');
    var ecranTitre = document.querySelector('.ecran-titre');
    var placementBateau = document.querySelector('.placement-bateau');

    boutonJouer.addEventListener('click', function() {
        ecranTitre.style.display = 'none';
        placementBateau.style.display = 'grid';
    });
});