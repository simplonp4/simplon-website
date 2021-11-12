var donnees = [           

["Respect",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
"<button type=\"button\" class=\"btn btn-danger buton shadow\">voir plus</button>",
"<div style=\"width: 0;height: 0;border-left: 30px solid transparent;border-right: 30px solid transparent;border-bottom: 30px solid #CE0033;rotate: 270deg;margin-top: 55px;margin-left: 73px;\"></div>"],

["Engagement",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
"<button type='button' class='btn btn-danger buton shadow'>voir plus</button>",
"<div style=\"width: 0;height: 0;border-left: 30px solid transparent;border-right: 30px solid transparent;border-bottom: 30px solid #CE0033;rotate: 270deg;margin-top: 220px;margin-left: 73px;\"></div>"],

["Focus",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
"<button type='button' class='btn btn-danger buton shadow'>voir plus</button>",
"<div style=\"width: 0;height: 0;border-left: 30px solid transparent;border-right: 30px solid transparent;border-bottom: 30px solid #CE0033;rotate: 270deg;margin-top: 380px;margin-left: 73px;\"></div>"],

["Discipline",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
"<button type='button' class='btn btn-danger buton shadow'>voir plus</button>",
"<div style=\"width: 0;height: 0;border-left: 30px solid transparent;border-right: 30px solid transparent;border-bottom: 30px solid #CE0033;rotate: 270deg;margin-top: 540px;margin-left: 73px;\"></div>"],
];
var nombre;
var contenu =  function(nombre){
    document.getElementById('titreValeur').innerHTML =  donnees[nombre][0];
    document.getElementById('text-valeur').innerHTML =  donnees[nombre][1];
    document.getElementById('voir-plus').innerHTML =  donnees[nombre][2];
    document.getElementById('triangle').innerHTML =  donnees[nombre][3];
    return;
}
contenu(0);
