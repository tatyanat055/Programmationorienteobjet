// script.js

// ==== CLASSE UTILISATEUR ====
class Utilisateur {
    constructor(nom, prenom, age, ville) {
      this.nom = nom; // Nom de l'utilisateur
      this.prenom = prenom; // Prénom de l'utilisateur
      this.age = age; // Âge de l'utilisateur
      this.ville = ville; // Ville de résidence
    }
  
    // Méthodes pour les actions
    marcher() {
      return `${this.prenom} marche dans les rues de ${this.ville}.`;
    }
  
    courir() {
      return `${this.prenom} court rapidement dans ${this.ville}.`;
    }
  
    sauter() {
      return `${this.prenom} saute de joie !`;
    }
  }
  
  // ==== CREATION DES UTILISATEURS ====
  const utilisateurs = [
    new Utilisateur("ALI", "Kalimi", 22, "Passamainty"),
    new Utilisateur("Soulaimana", "Embdou", 25, "Mtzamboro"),
    new Utilisateur("Moussa", "Hakim", 35, "Doujani"),
    new Utilisateur("Said Hachim", "Faid", 28, "Pamandzi"),
    new Utilisateur("Bacar", "Nejma", 22, "Labattoir"),
  ];
  
  // ==== CREATION DES VOITURES ====
  const voitures = [
    { couleur: "rouge", taille: "petite", forme: "compacte" },
    { couleur: "bleue", taille: "moyenne", forme: "berline" },
    { couleur: "verte", taille: "grande", forme: "SUV" },
    { couleur: "noire", taille: "grande", forme: "pickup" },
    { couleur: "blanche", taille: "moyenne", forme: "sportive" },
  ];
  
  // ==== AFFICHAGE DES UTILISATEURS ====
  const utilisateursContainer = document.getElementById("utilisateurs-container");
  
  // Générer dynamiquement les cartes des utilisateurs
  utilisateurs.forEach((utilisateur, index) => {
    const utilisateurCard = document.createElement("div");
    utilisateurCard.classList.add("card");
  
    utilisateurCard.innerHTML = `
      <h3>${utilisateur.prenom} ${utilisateur.nom}</h3>
      <p><strong>Âge :</strong> ${utilisateur.age} ans</p>
      <p><strong>Ville :</strong> ${utilisateur.ville}</p>
      <button class="btn" data-utilisateur="${index}">Voir Action</button>
    `;
  
    utilisateursContainer.appendChild(utilisateurCard);
  });
  
  // ==== AFFICHAGE DES VOITURES ====
  const voituresContainer = document.getElementById("voitures-container");
  
  // Générer dynamiquement les cartes des voitures
  voitures.forEach((voiture, index) => {
    const voitureCard = document.createElement("div");
    voitureCard.classList.add("card");
  
    voitureCard.innerHTML = `
      <h3>Voiture ${index + 1}</h3>
      <p><strong>Couleur :</strong> ${voiture.couleur}</p>
      <p><strong>Taille :</strong> ${voiture.taille}</p>
      <p><strong>Forme :</strong> ${voiture.forme}</p>
    `;
  
    voituresContainer.appendChild(voitureCard);
  });
  
  // ==== GESTION DES ACTIONS DES UTILISATEURS ====
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const index = parseInt(event.target.dataset.utilisateur);
      const utilisateur = utilisateurs[index];
  
      // Choisir une action aléatoire
      const actions = [utilisateur.marcher(), utilisateur.courir(), utilisateur.sauter()];
      const actionAleatoire = actions[Math.floor(Math.random() * actions.length)];
  
      // Afficher l'action dans la zone "output"
      document.getElementById("output").innerHTML = `<p>${actionAleatoire}</p>`;
    });
  });
  