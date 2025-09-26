function switchRole(role) {
  const buttons = document.querySelectorAll(".role-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.role-btn[onclick="switchRole('${role}')"]`).classList.add("active");

  // You can add different form behavior here
  const formTitle = document.querySelector(".form-box h2");
  formTitle.textContent = role === "student" ? "Student Login" : "Teacher Login";
}
