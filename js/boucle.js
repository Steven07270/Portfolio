// Tableau de produits avec titre, prix et description
const produits = [
  { date: "2018-2021", titre: "Collège du Vivarais", prix: "07 270 Lamastre", description: "Un petit collège dans la campagne" },
  { date: "2021-2024", titre: "Lycée Marius Bouvier", prix: "07 300 Tournon", description: "Un lycée dans une petite ville d'Ardéche" },
  { date: "2024-2026", titre: "Pôle Sup Saint Denis", prix: "07 100 Annonay", description: "Un grand établissement parmis les meilleurs de l'Ardèche" },
];

const produits2 = [
    { date: "2021", titre: "Brevet des collèges", prix: "Collège du Vivarais", description: "" },
    { date: "2024", titre: "Bac Professionnel SN RISC", prix: "Lycée Marius Bouvier", description: "" },
    { date: "2026", titre: "BTS SIO", prix: "Pôle Sup Saint Denis", description: "" },
  ];

// Sélectionne l'élément avec l'ID "listedupanier" pour insérer les produits
const listedupanier = document.getElementById("listedupanier");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits.forEach(produit => {
  // Crée une div de type "card" pour chaque produit
  const cardHTML = `
    <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
      <span class="date">${produit.date}</span>
        <h2>${produit.titre}</h2>
        <span class="position">${produit.prix}</span>
        <p class="mt-4">${produit.description}</p>
    </div>
  `;
  
  // Ajoute la carte dans le conteneur "listedupanier"
  listedupanier.insertAdjacentHTML("beforeend", cardHTML);
});

const listedupanier2 = document.getElementById("listedupanier2");

// Parcourt le tableau de produits et génère des cartes Bootstrap pour chaque produit
produits2.forEach(produit => {
    // Crée une div de type "card" pour chaque produit
    const cardHTML = `
      <div class="resume-wrap ftco-animate fadeInUp ftco-animated">
            <span class="date">${produit.date}</span>
            <h2 class="mb-4">${produit.titre}</h2>
            <h6 class="position">${produit.prix}</h6>
            <p class="mt-4">${produit.description}</p>
      </div>
    `;
    
    // Ajoute la carte dans le conteneur "listedupanier"
    listedupanier2.insertAdjacentHTML("beforeend", cardHTML);
  });
  