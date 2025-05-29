const dati = {
  Classe1: [
    { min: 135, max: 144, prezzo: 3, cntrSC: 32 },
    { min: 145, max: 154, prezzo: 7, cntrSC: 32 },
    { min: 155, max: 164, prezzo: 11, cntrSC: 32 },
    { min: 165, max: 174, prezzo: 20, cntrSC: 32 },
    { min: 175, max: 184, prezzo: 23, cntrSC: 32 },
    { min: 185, max: 194, prezzo: 27, cntrSC: 32 },
    { min: 195, max: 204, prezzo: 35, cntrSC: 32 },
    { min: 205, max: Infinity, prezzo: 42, cntrSC: 32 },
  ],
  Classe2: [
    { min: 125, max: 134, prezzo: 3, cntrSC: 32 },
    { min: 135, max: 144, prezzo: 7, cntrSC: 32 },
    { min: 145, max: 154, prezzo: 11, cntrSC: 32 },
    { min: 155, max: 164, prezzo: 20, cntrSC: 32 },
    { min: 165, max: 174, prezzo: 23, cntrSC: 32 },
    { min: 175, max: 184, prezzo: 27, cntrSC: 32 },
    { min: 185, max: 194, prezzo: 35, cntrSC: 32 },
    { min: 195, max: Infinity, prezzo: 42, cntrSC: 32 },
  ],
  Classe3: [
    { min: 110, max: 119, prezzo: 3, cntrSC: 30 },
    { min: 120, max: 129, prezzo: 7, cntrSC: 30 },
    { min: 130, max: 139, prezzo: 11, cntrSC: 30 },
    { min: 140, max: 149, prezzo: 20, cntrSC: 30 },
    { min: 150, max: 159, prezzo: 23, cntrSC: 30 },
    { min: 160, max: 169, prezzo: 27, cntrSC: 30 },
    { min: 170, max: 179, prezzo: 35, cntrSC: 30 },
    { min: 180, max: Infinity, prezzo: 42, cntrSC: 30 },
  ],
  Classe4: [
    { min: 100, max: 109, prezzo: 3, cntrSC: 28 },
    { min: 110, max: 119, prezzo: 7, cntrSC: 28 },
    { min: 120, max: 129, prezzo: 11, cntrSC: 28 },
    { min: 130, max: 139, prezzo: 20, cntrSC: 28 },
    { min: 140, max: 149, prezzo: 23, cntrSC: 28 },
    { min: 150, max: 159, prezzo: 27, cntrSC: 28 },
    { min: 160, max: 169, prezzo: 35, cntrSC: 28 },
    { min: 170, max: Infinity, prezzo: 42, cntrSC: 28 },
  ],
};

document.getElementById("calcola").addEventListener("click", () => {
  const classe = document.getElementById("classe").value;
  const tipo = document.getElementById("tipo").value;
  const valore = Number(document.getElementById("valore").value);
  const output = document.getElementById("output");

  if (isNaN(valore)) {
    output.textContent = "Inserisci un valore valido.";
    return;
  }

  const intervalli = dati[classe];
  if (!intervalli) {
    output.textContent = "Classe non trovata.";
    return;
  }

  let risultato = null;

  if (tipo === "cntrCR") {
    risultato = intervalli.find(
      (el) => valore >= el.min && valore <= el.max
    );
    if (risultato) {
      output.textContent = `Prezzo: €${risultato.prezzo} — Contenitori SC: ${risultato.cntrSC}`;
    } else {
      output.textContent = "Valore fuori intervallo per cntr CR.";
    }
  } else if (tipo === "prezzo") {
    risultato = intervalli.find(
      (el) => valore === el.prezzo
    );
    if (risultato) {
      output.textContent = `cntr CR: da ${risultato.min} a ${risultato.max === Infinity ? 'oltre' : risultato.max} — Contenitori SC: ${risultato.cntrSC}`;
    } else {
      output.textContent = "Prezzo non trovato tra gli intervalli.";
    }
  }
});
