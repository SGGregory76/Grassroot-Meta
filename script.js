document.addEventListener("DOMContentLoaded", () => {
  const contentArea = document.getElementById("content");

  // Example dynamic data structure
  const entries = [
    {
      title: "Meta Movement Launch",
      description: "The Grassroots Meta initiative begins here with bold ideas and citizen-powered designs.",
    },
    {
      title: "Design Drop #1",
      description: "Fresh visuals for political messaging, banner campaigns, and independent voices.",
    }
  ];

  // Render each entry as a card
  entries.forEach(entry => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.description}</p>
    `;
    contentArea.appendChild(card);
  });
});
