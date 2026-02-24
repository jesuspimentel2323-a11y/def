function generar() {
  const nombre = document.getElementById("nombre").value.toLowerCase();
  const apodo = document.getElementById("apodo").value.toLowerCase();
  const anio = document.getElementById("anio").value;
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  if (!nombre) {
    lista.innerHTML = "<li>❌ write something bro</li>";
    return;
  }

  const separadores = ["", ".", "_"];
  const sufijos = ["", "x", "tv", "dev", "gg", "real", "oficial"];

  let resultados = new Set();

  separadores.forEach(sep => {
    sufijos.forEach(suf => {
      resultados.add(`${nombre}${sep}${apodo}${suf}${anio}`);
      resultados.add(`${apodo}${sep}${nombre}${suf}`);
      resultados.add(`${nombre}${anio}${suf}`);
    });
  });

  resultados.forEach(user => {
    if (user && user !== "undefined") {
      const li = document.createElement("li");
      li.textContent = user;
      lista.appendChild(li);
    }
  });
}