const form = document.getElementById("loveForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("userInput").value.trim();
    localStorage.setItem("loveAnswer", input);

    window.location.href = "result.html";
  });
}

const answerBox = document.getElementById("answerText");
if (answerBox) {
  const savedAnswer = localStorage.getItem("loveAnswer");
  answerBox.textContent = savedAnswer || "Because even after everything, my heart still remembers you.";
}
