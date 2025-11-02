// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.





function whoIsAdmin(utilisateurs) {
  const admins = [];

  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].estAdmin === true) {
      admins.push(utilisateurs[i].nom);
    }
  }

  return admins;
}


const utilisateurs = [
  { nom: "Maria", age: 22, estAdmin: true },
  { nom: "Rachel", age: 25, estAdmin: false },
  { nom: "Oracle", age: 19, estAdmin: true }
];


const resultat = whoIsAdmin(utilisateurs);
console.log(resultat); 


module.exports = {
  whoIsAdmin,
};
