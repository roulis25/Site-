function toggleChat() {
  const chat = document.getElementById("chat-window");
  chat.style.display = (chat.style.display === "none") ? "block" : "none";
}

window.addEventListener('scroll', function () {
  const button = document.querySelector('.scroll-to-top');
  if (window.scrollY > 200) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Το μήνυμα υποβλήθηκε με επιτυχία!");
  event.target.reset();
}

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}