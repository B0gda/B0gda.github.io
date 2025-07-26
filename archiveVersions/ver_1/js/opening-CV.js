let resumeButtons = document.querySelectorAll("#resumeButton");
let resumeButtonsEng = document.querySelectorAll("#resumeButtonEng");
let portfolioElement = document.querySelectorAll("#portfolioElement");
let viewprojectButton = document.querySelector(".viewProjectsButton");

function isMobileDevice() {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
}

resumeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isMobileDevice()) {
      var downloadLink = document.createElement("a");
      downloadLink.href = "../assets/CV-RU-SBA.pdf";
      downloadLink.download = "CV-RU-SBA.pdf";

      if ("download" in downloadLink) {
        downloadLink.click();
      } else {
        window.location.href = "../assets/CV-RU-SBA.pdf";
      }
    } else {
      window.open("../assets/CV-RU-SBA.pdf", "_blank");
    }
  });
});

resumeButtonsEng.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isMobileDevice()) {
      var downloadLink = document.createElement("a");
      downloadLink.href = "../assets/CV-ENG.pdf";
      downloadLink.download = "CV-ENG.pdf";

      if ("download" in downloadLink) {
        downloadLink.click();
      } else {
        window.location.href = "../assets/CV-ENG.pdf";
      }
    } else {
      window.open("../assets/CV-ENG.pdf", "_blank");
    }
  });
});

portfolioElement.forEach(function (button) {
  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

viewprojectButton.addEventListener("click", function () {
  window.location.href = "https://github.com/B0gda";
});
