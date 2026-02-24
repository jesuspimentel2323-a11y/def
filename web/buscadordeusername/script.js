function buscar() {
  const user = document.getElementById("username").value.trim();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (user === "") {
    resultados.innerHTML = "<li>❌ Escribe un nombre de usuario</li>";
    return;
  }

  const sitios = {
    "Instagram": `https://www.instagram.com/${user}`,
    "GitHub": `https://github.com/${user}`,
    "Twitter (X)": `https://twitter.com/${user}`,
    "TikTok": `https://www.tiktok.com/@${user}`,
    "YouTube": `https://www.youtube.com/@${user}`,
    "Reddit": `https://www.reddit.com/user/${user}`
  };

  for (let sitio in sitios) {
    const li = document.createElement("li");
    li.innerHTML = `🔗 <a href="${sitios[sitio]}" target="_blank">${sitio}</a>`;
    resultados.appendChild(li);
  }
}