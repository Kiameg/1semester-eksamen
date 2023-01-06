window.addEventListener("load", sidenVises);
/**********Her loades index og når den loader gemmer/hider den "Om Mig" siden**********/
function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".om_mig").classList.add("hide");
  document.querySelector(".om_mig_knap").addEventListener("click", omMig);
}

/**********når der bliver klikket på "Om Mig" knappen, så gemmer den index siden og viser "Om Mig" indhold**********/
function omMig() {
  console.log("omMig");
  document.querySelector(".indhold_index").classList.add("hide");
  document.querySelector(".om_mig").classList.remove("hide");
}

/*********mouseover tilføjer og fjerner billeder**********/
document.querySelector(".subject2").addEventListener("mouseover", backgroundSubject2);
document.querySelector(".subject3").addEventListener("mouseover", backgroundSubject3);
document.querySelector(".subject4").addEventListener("mouseover", backgroundSubject4);
document.querySelector(".subject5").addEventListener("mouseover", backgroundSubject5);

/**********function på billede 2. hvis div indeholder billede2, så skal den fjerne og tilføje alt efter om man bruger mouseover på den **********/
function backgroundSubject2() {
  console.log("backgroundSubject2");

  if (document.querySelector(".subject2").classList.contains("background_subject2")) {
    document.querySelector(".subject2").classList.remove("background_subject2");
  } else {
    document.querySelector(".subject2").classList.add("background_subject2");
  }
}

/**********function på billede 3. hvis div indeholder billede3, så skal den fjerne og tilføje alt efter om man bruger mouseover på den **********/
function backgroundSubject3() {
  console.log("backgroundSubject3");

  if (document.querySelector(".subject3").classList.contains("background_subject3")) {
    document.querySelector(".subject3").classList.remove("background_subject3");
  } else {
    document.querySelector(".subject3").classList.add("background_subject3");
  }
}

/**********function på billede 4. hvis div indeholder billede4, så skal den fjerne og tilføje alt efter om man bruger mouseover på den **********/
function backgroundSubject4() {
  console.log("backgroundSubject4");

  if (document.querySelector(".subject4").classList.contains("background_subject4")) {
    document.querySelector(".subject4").classList.remove("background_subject4");
  } else {
    document.querySelector(".subject4").classList.add("background_subject4");
  }
}
/**********function på billede 5. hvis div indeholder billede5, så skal den fjerne og tilføje alt efter om man bruger mouseover på den **********/
function backgroundSubject5() {
  console.log("backgroundSubject5");

  if (document.querySelector(".subject5").classList.contains("background_subject5")) {
    document.querySelector(".subject5").classList.remove("background_subject5");
  } else {
    document.querySelector(".subject5").classList.add("background_subject5");
  }
}
