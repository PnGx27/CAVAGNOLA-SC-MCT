document.getElementById("calcola").addEventListener("click", () => {

  const classe = document.getElementById("classe").value;
  const tipo = document.getElementById("tipo").value;
  const valore = Number(document.getElementById("valore").value);
  const ritardo = Number(document.getElementById("ritardo").value);
  const output = document.getElementById("output");

  if (isNaN(valore)) {
    output.textContent = "Valore non valido";
    return;
  }

  const intervalli = dati[classe];

  if (!intervalli) {
    output.textContent = "Classe non trovata";
    return;
  }

  const risultato = intervalli.find(el =>
    valore >= el.min && valore <= el.max
  );

  if (!risultato) {
    output.textContent = "Fuori intervallo";
    return;
  }

  // 🔥 LOGICA RITARDO CORRETTA
  const percentuale = ritardo * 10;

  const obiettivoBase = risultato.min;

  const obiettivoFinale =
    ritardo > 0
      ? Math.ceil(obiettivoBase * (1 - percentuale / 100))
      : obiettivoBase;

  const msgRitardo =
    ritardo > 0
      ? `Ritardo: ${ritardo}h (-${percentuale}%)`
      : "Nessun ritardo";

  if (tipo === "cntrCR") {

    output.textContent =
`Cavagnola: €${risultato.prezzo}
Valore inserito: ${valore}
Obiettivo SC: ${obiettivoFinale}
Contenitori SC: ${risultato.cntrSC}
${msgRitardo}`;

  } else {

    output.textContent =
`Cavagnola: €${risultato.prezzo}
Range CR: ${risultato.min}-${risultato.max}
${msgRitardo}`;
  }

});