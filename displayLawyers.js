function displayLawyers(list) {
  listContainer.innerHTML = "";
  if (list.length === 0) {
    listContainer.innerHTML = "<p>No lawyers found.</p>";
    return;
  }
  list.forEach((lawyer, index) => {
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
      <button class="book-btn" data-index="${index}">Book Appointment</button>
    `;
    listContainer.appendChild(card);
  });

  // Add event listeners to all "Book Appointment" buttons
  const bookButtons = document.querySelectorAll(".book-btn");
  bookButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      const selectedLawyer = list[index];

      // Option 1: Store selected lawyer in localStorage
      localStorage.setItem("selectedLawyer", JSON.stringify(selectedLawyer));

      // Redirect to booking page
      window.location.href = "booking.html";
    });
  });
  document.addEventListener("click", function (e) {
  if (e.target && e.target.tagName === "BUTTON" && e.target.textContent === "Book Appointment") {
    const card = e.target.closest(".lawyer-card");
    const lawyerName = card.querySelector("h3").textContent;
    window.location.href = `booking.html?lawyer=${encodeURIComponent(lawyerName)}`;
  }
});

}
