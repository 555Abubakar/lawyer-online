function displayLawyers(list) {
  listContainer.innerHTML = "";
  if (list.length === 0) {
    listContainer.innerHTML = "<p>No lawyers found.</p>";
    return;
  }
  list.forEach(lawyer => {
    const card = document.createElement("div");
    card.className = "lawyer-card";
    card.innerHTML = `
      <img src="${lawyer.image}" alt="${lawyer.name}">
      <h3>${lawyer.name}</h3>
      <p><strong>Type:</strong> ${lawyer.type}</p>
      <p><strong>Phone:</strong> ${lawyer.phone}</p>
      <p><strong>Experience:</strong> ${lawyer.experience}</p>
      <p><strong>Rating:</strong> ⭐ ${lawyer.rating}</p>
      <p><strong>Details:</strong> ${lawyer.details}</p>
      <button class="book-btn">Book Appointment</button>
    `;
    listContainer.appendChild(card);

    const bookBtn = card.querySelector(".book-btn");
    bookBtn.addEventListener("click", () => {
      localStorage.setItem("selectedLawyer", JSON.stringify(lawyer));
      window.location.href = "booking.html";
    });
  });
}
