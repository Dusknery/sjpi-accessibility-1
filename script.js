document.addEventListener("DOMContentLoaded", function () {
  const articleList = document.querySelector("#article-list");
  const allArticles = document.querySelectorAll("main.articles > article");
  const fishButton = document.querySelector('button[data-article="fish"]');

  // Visa "fish" som standard
  document.querySelector("#fish").style.display = "block";
  fishButton.style.display = "none"; // Dölj "fish"-knappen i sidopanelen

  articleList.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;

    const articleKey = button.getAttribute("data-article");
    if (!articleKey) return;

    // Dölj alla artiklar
    allArticles.forEach(article => {
      article.style.display = "none";
    });

    // Visa den valda artikeln
    const targetArticle = document.querySelector(`main.articles #${articleKey}`);
    if (targetArticle) {
      targetArticle.style.display = "block";
    }

    // Hantera sidopanelens knappar
    document.querySelectorAll(".article-button").forEach(btn => {
      btn.style.display = "block"; // Visa alla knappar
    });
    button.style.display = "none"; // Dölj den klickade knappen
  });
});
