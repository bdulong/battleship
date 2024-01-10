document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les boutons
    const buttons = document.querySelectorAll('.bouton__placement-bateau');

    // Créez un nouvel élément div pour le bateau
    const boat = document.createElement('div');
    boat.style.width = '40px'; // Vous pouvez ajuster la taille du bateau ici
    boat.style.height = '200px';
    boat.style.backgroundColor = 'blue';
    boat.style.position = 'absolute';
    boat.style.zIndex = "2"
    boat.style.display = 'none'; // Cachez le bateau initialement

    // Ajoutez le bateau à la page
    document.body.appendChild(boat);

    let isMoving = false; // Drapeau pour vérifier si le bateau est en mouvement

    // Ajoutez un gestionnaire d'événements à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêchez l'événement de se propager au document

            if (!isMoving) {
                // Affichez le bateau et déplacez-le à la position de la souris
                boat.style.display = 'block';
                moveBoat(event);

                // Commencez à déplacer le bateau
                document.addEventListener('mousemove', moveBoat);
                isMoving = true; // Mettez le drapeau à vrai
            }
        });
    });

    // Ajoutez un gestionnaire d'événements mousedown au bateau pour commencer à le déplacer
    boat.addEventListener('mousedown', (event) => {
        event.stopPropagation(); // Empêchez l'événement de se propager au document

        if (!isMoving) {
            // Commencez à déplacer le bateau
            document.addEventListener('mousemove', moveBoat);
            isMoving = true; // Mettez le drapeau à vrai
        }
    });

    // Ajoutez un gestionnaire d'événements mouseup au bateau pour le placer
    boat.addEventListener('mouseup', (event) => {
        event.stopPropagation(); // Empêchez l'événement de se propager au document

        if (isMoving) {
            placeBoat(); // Placez le bateau
        }
    });

    // Fonction pour déplacer le bateau
    function moveBoat(event) {
        boat.style.left = `${event.clientX}px`;
        boat.style.top = `${event.clientY}px`;
    }

    // Fonction pour placer le bateau
    function placeBoat() {
        // Arrêtez de déplacer le bateau
        document.removeEventListener('mousemove', moveBoat);
        isMoving = false; // Mettez le drapeau à faux
    }
});