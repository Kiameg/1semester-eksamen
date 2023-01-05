window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".om_mig").classList.add("hide");
  document.querySelector(".om_mig_knap").addEventListener("click", omMig);
}

function omMig() {
  console.log("omMig");
  document.querySelector(".indhold_index").classList.add("hide");
  document.querySelector(".om_mig").classList.remove("hide");
}
