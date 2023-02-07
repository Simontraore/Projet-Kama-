const trainingData = [
    {
      title: 'Introduction Cybersécurité',
      category: 'Cybersécurité',
      status: 'Victoire'
    },
    {
      title: 'Protéger son WiFi personnel',
      category: 'À la maison',
      status: 'À commencer'
    },
    {
      title: 'Je reconnais des données personelles',
      category :'RGPD',
      status: 'À commencer'
    },
    {
      title: 'Reconnaître un mail de phishing',
      category: 'Cybersécurité',
      status: 'Défaite'
    },
    {
      title: 'Bien utiliser son smartphone',
      category: 'À la maison',
      status: 'À commencer'
    },
    {
      title: 'Choisir un mot de passe invincible',
      category: 'Cybersécurité',
      status: 'À commencer'
    },
    {
      title: 'Limiter mon empreinte numérique',
      category: 'À la maison',
      status: 'À commencer'
    },
    {
      title: 'Pourquoi le RGPD est important',
      category: 'RGPD',
      status: 'À commencer'
    },
    {
      title: 'Introduction RGPD',
      category: 'RGPD',
      status: 'Défaite'
    },
  ];
  
  //Fonction de tri
  const trainingTable = document.getElementById("training-table");
  const trainingTableBody = trainingTable.getElementsByTagName("tbody")[0];

function sortData() {
  trainingData.sort((a, b) => {
    if (a.status === b.status) {  // si le status a et b sont pareils alors rien ne change
      return 0;
    }
    if (a.status === "À commencer") {  
      return -1;
    }
    if (b.status === "À commencer") {
      return 1;
    }
    if (a.status === "Défaite") {
      return -1;
    }
    if (b.status === "Défaite") {
      return 1;
    }
  });
  trainingTableBody.innerHTML = "";
  for (const training of trainingData) {
    const row = document.createElement("tr");
    
    const titleColumn = document.createElement("td");
    titleColumn.innerText = training.title;
    row.appendChild(titleColumn);
    
    const categoryColumn = document.createElement("td");
    categoryColumn.innerText = training.category;
    row.appendChild(categoryColumn);
    
    const statusColumn = document.createElement("td");
    statusColumn.innerText = training.status;
    row.appendChild(statusColumn);
    

    //si status = victoire alors renvoyer check
    const buttonColumn = document.createElement("td");
    if (training.status === "Victoire") {
      const img = document.createElement("img");
      img.src = "image/check.png";
      img.classList.add("check");
      buttonColumn.appendChild(img); //afficher image check


    //si status = A commencer ou defaite alors afficher bouton go !
    } else if (training.status === "À commencer" || training.status === "Défaite") {
      const button = document.createElement("button");
      button.innerText = "Go!";
      button.classList.add("go-button");
      button.addEventListener("click", () => { //quand on click sur le boutton :
        const result = Math.random() < 0.5 ? "Victoire" : "Défaite";  //definit aléatoirement victoire ou défaite
        training.status = result;
        statusColumn.innerText = result;
        if (training.status === "Victoire") {  // si status = victoire
          button.setAttribute("disabled", true); //desactivation du boutton
          const img = document.createElement("img");
          img.src = "image/check.png";
          img.style.transition = "opacity 2s ease-in-out";
          img.style.opacity = 0;
          buttonColumn.replaceChild(img, button); // renplacement du bouton par l'image check
        }
        sortData();  // mise à jour du tableau
      });
      buttonColumn.appendChild(button);
    }
    row.appendChild(buttonColumn);
    
    trainingTableBody.appendChild(row);
  }
}

sortData();
