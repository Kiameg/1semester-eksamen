window.addEventListener("load", sidenVises);
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".nav_bar");
const menuShown = menu.classList.contains("shown");

/**********Her loades index og når den loader gemmer/hider den "Om Mig" siden**********/
function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".om_mig").classList.add("hide");
  document.querySelector(".om_mig_knap").addEventListener("click", omMig);
}

/**********når der bliver klikket på "Om Mig" knappen, så gemmer/hider den index siden og viser "Om Mig" indhold**********/
function omMig() {
  console.log("omMig");
  document.querySelector(".indhold_index").classList.add("hide");
  document.querySelector(".om_mig").classList.remove("hide");
}

/**********Function billede2. tilføjer backgrundsbillede **********/
function backgroundSubject2() {
  console.log("backgroundSubject2");
  document.querySelector(".subject2").classList.add("background_subject2");
}
/**********Function billede2. fjerner backgrundsbillede**********/
function backgroundSubject2exit() {
  console.log("backgroundSubject2");
  document.querySelector(".subject2").classList.remove("background_subject2");
}

/**********Function billede3. tilføjer backgrundsbillede **********/
function backgroundSubject3() {
  console.log("backgroundSubject3");
  document.querySelector(".subject3").classList.add("background_subject3");
}
/**********Function billede3. fjerner backgrundsbillede**********/
function backgroundSubject3exit() {
  console.log("backgroundSubject3");
  document.querySelector(".subject3").classList.remove("background_subject3");
}

/**********Function billede4. tilføjer backgrundsbillede **********/
function backgroundSubject4() {
  console.log("backgroundSubject4");
  document.querySelector(".subject4").classList.add("background_subject4");
}
/**********Function billede4. fjerner backgrundsbillede**********/
function backgroundSubject4exit() {
  console.log("backgroundSubject4");
  document.querySelector(".subject4").classList.remove("background_subject4");
}

/**********Function billede5. tilføjer backgrundsbillede **********/
function backgroundSubject5() {
  console.log("backgroundSubject5");
  document.querySelector(".subject5").classList.add("background_subject5");
}
/**********Function billede5. fjerner backgrundsbillede**********/
function backgroundSubject5exit() {
  console.log("backgroundSubject5");
  document.querySelector(".subject5").classList.remove("background_subject5");
}
/*********Kører funktion når mouseover eller mouseleave**********/
document.querySelector(".subject2").addEventListener("mouseover", backgroundSubject2);
document.querySelector(".subject2").addEventListener("mouseleave", backgroundSubject2exit);
document.querySelector(".subject3").addEventListener("mouseover", backgroundSubject3);
document.querySelector(".subject3").addEventListener("mouseleave", backgroundSubject3exit);
document.querySelector(".subject4").addEventListener("mouseover", backgroundSubject4);
document.querySelector(".subject4").addEventListener("mouseleave", backgroundSubject4exit);
document.querySelector(".subject5").addEventListener("mouseover", backgroundSubject5);
document.querySelector(".subject5").addEventListener("mouseleave", backgroundSubject5exit);

function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}
// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
