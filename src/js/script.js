var btnOpen = document.getElementById("btn-open");

var platformList = document.getElementById("platform");

btnOpen.addEventListener("click", function() {
  platformList.classList.add("active");
});
