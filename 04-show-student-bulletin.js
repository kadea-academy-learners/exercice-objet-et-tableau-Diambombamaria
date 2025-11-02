// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".




function showStudentBulletin(eleves) {
  const bulletins = [];

  for (let i = 0; i < eleves.length; i++) {
    const eleve = eleves[i];
    const notes = eleve.notes;

 
    let moyenne = 0;
    if (notes.length > 0) {
      const somme = notes.reduce((acc, note) => acc + note, 0);
      moyenne = somme / notes.length;
    }

    moyenne = moyenne.toFixed(2); 

    
    let commentaire = "";
    if (moyenne >= 16) {
      commentaire = "Excellent";
    } else if (moyenne >= 14) {
      commentaire = "Très Bien";
    } else if (moyenne >= 12) {
      commentaire = "Bien";
    } else if (moyenne >= 10) {
      commentaire = "Passable";
    } else {
      commentaire = "À revoir";
    }

    
    bulletins.push({
      nom: eleve.nom,
      moyenne: Number(moyenne),
      commentaire: commentaire,
    });
  }

  return bulletins;
}


const eleves = [
  { nom: "Maria", notes: [18, 16, 17] },
  { nom: "Exau", notes: [12, 13, 11] },
  { nom: "Alex", notes: [8, 9, 10] },
  { nom: "Oracle", notes: [] },
];


const resultats = showStudentBulletin(eleves);
console.log(resultats);


module.exports = {
  showStudentBulletin,
};
