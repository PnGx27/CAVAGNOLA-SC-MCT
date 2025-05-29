
const dati = {
  "Classe1": {
    "cntr": [
      { min: 0, max: 100, prezzo: "15€", cntrSC: 20 },
      { min: 101, max: 200, prezzo: "27€", cntrSC: 32 },
      { min: 201, max: 300, prezzo: "39€", cntrSC: 45 },
      { min: 301, max: 400, prezzo: "50€", cntrSC: 60 }
    ],
    "prezzo": [
      { min: 0, max: 20, cntrCR: 80, cntrSC: 10 },
      { min: 21, max: 30, cntrCR: 150, cntrSC: 25 },
      { min: 31, max: 40, cntrCR: 200, cntrSC: 32 }
    ]
  },
  "Classe2": {
    "cntr": [
      { min: 0, max: 150, prezzo: "25€", cntrSC: 25 },
      { min: 151, max: 250, prezzo: "38€", cntrSC: 40 }
    ],
    "prezzo": [
      { min: 0, max: 25, cntrCR: 120, cntrSC: 18 },
      { min: 26, max: 35, cntrCR: 160, cntrSC: 30 }
    ]
  },
  "Classe3": {
    "cntr": [
      { min: 0, max: 180, prezzo: "22€", cntrSC: 24 },
      { min: 181, max: 280, prezzo: "35€", cntrSC: 37 }
    ],
    "prezzo": [
      { min: 0, max: 22, cntrCR: 90, cntrSC: 20 },
      { min: 23, max: 33, cntrCR: 140, cntrSC: 28 }
    ]
  },
  "Classe4": {
    "cntr": [
      { min: 0, max: 130, prezzo: "18€", cntrSC: 22 },
      { min: 131, max: 230, prezzo: "30€", cntrSC: 35 }
    ],
    "prezzo": [
      { min: 0, max: 18, cntrCR: 100, cntrSC: 15 },
      { min: 19, max: 29, cntrCR: 155, cntrSC: 27 }
    ]
  }
};

const outputEl = document.getElementById("output");
const classeEl = document.getElementById("classe");
const tipoEl = document.getElementById("tipo");
const valoreEl = document.getElementById("valore");
const btn = document.getElementById("calcolaBtn");

btn.addEventListener("click", () => {
  outputEl.textContent = "";
  const classe = classeEl.value;
  const tipo = tipoEl.value;
  const valore = parseFloat(valoreEl.value);

  if (!classe || !tipo || isNaN(valore)) {
    outputEl.textContent = "Per favore, seleziona classe, tipo e inserisci un valore numerico valido.";
    return;
  }

  if (!dati[classe] || !dati[classe][tipo]) {
    outputEl.textContent = "Dati non disponibili per la selezione effettuata.";
    return;
  }

  const intervalli = dati[classe][tipo];
  let trovato = false;
  for (const intervallo of intervalli) {
    if (valore >= intervallo.min && valore <= intervallo.max) {
      trovato = true;
      if (tipo === "cntr") {
        outputEl.textContent = `Prezzo: ${intervallo.prezzo}\nContenitori SC: ${intervallo.cntrSC}`;
      } else {
        outputEl.textContent = `Contenitori CR: ${intervallo.cntrCR}\nContenitori SC: ${intervallo.cntrSC}`;
      }
      break;
    }
  }

  if (!trovato) {
    outputEl.textContent = "Valore fuori intervallo previsto.";
  }
});
