// DESCRIZIONE:
// ricreo lo slider come fatto questa mattina
// faccio funzionare il tracciamento dei pallini sia next che prev
// creo la possibilità di poter navigare cliccando anche sui pallini
// cerco di fare un refactoring del mio codice
$(document).ready(function(){

// Creo due eventi di callback da richiamare per
// quando l'utente clicca freccia avanti/indietro
$(".next").click(
  right
);

$(".prev").click(
  left
);

// Funzione per la freccia avanti
function right() {

  // riferimento dell'immagine a schermo
  var onscreen = $('.images img.active');

  // pallino attivo
  var diglett = $(".nav i.active");

  // rimuovo la classe active a img e pallino
  onscreen.removeClass("active");
  diglett.removeClass("active");

  // verifico se l'immagine onscreen è l'ultima
  if(onscreen.hasClass("last")){
    $("images img.first").addClass("active");
    $('.nav i.first').addClass('active');
  } else {
  // applico .active all'immagine seguente
  onscreen.next().addClass("active");
  diglett.next().addClass("active");
  }
}

// Funzione per la freccia indietro
function left() {

  // riferimento dell'immagine a schermo
  var onscreen = $('.images img.active');

  // pallino attivo
  var diglett = $(".nav i.active");

  // rimuovo la classe active a img e pallino
  onscreen.removeClass("active");
  diglett.removeClass("active");

  // verifico se l'immagine onscreen è l'ultima
  if(onscreen.hasClass("first")){
    $("images img.last").addClass("active");
    $('.nav i.last').addClass('active');
  } else {
  // applico .active all'immagine precedente
  onscreen.prev().addClass("active");
  diglett.prev().addClass("active");
  }
}

// fas fa-circle active first last
// navigazione tramite pallini


});
