// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [];

function signUp(nom, email, password, confirmPassword) {
	

    const baseDeDonnees = []; 



function signUp(nom, email, password, confirmPassword) {
  
  const utilisateurExiste = baseDeDonnees.find(user => user.email === email);
  if (utilisateurExiste) {
    return "Erreur : cet email est déjà utilisé.";
  }

  
  if (password !== confirmPassword) {
    return "Erreur : les mots de passe ne correspondent pas.";
  }

  
  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1,
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

  
  baseDeDonnees.push(nouvelUtilisateur);

  return `Utilisateur ${nom} créé avec succès !`;
}



function login(email, password) {
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  if (!utilisateur) {
    return "Erreur : utilisateur introuvable.";
  }

  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  if (utilisateur.estBloque) {
    return "Erreur : ce compte est bloqué.";
  }

  utilisateur.estConnecte = true;
  return utilisateur; 
}



console.log(signUp("Maria", "maria@gmail.com", "1234", "1234"));
console.log(signUp("Exau", "exau@gmail.com", "abcd", "abcd"));
console.log(signUp("Maria", "maria@gmail.com", "1234", "1234")); 

console.log(login("maria@gmail.com", "1234"));
console.log(login("inconnu@gmail.com", "1234")); 

console.log(baseDeDonnees); 

}

function login() {
	
}

module.exports = { baseDeDonnees, signUp, login };
