const shareButton = document.querySelector("#share-button"),
    sharePanel = document.querySelector("#share-panel");
shareButton.addEventListener("click", event => {
    console.log("hello");
    if (sharePanel.style.display === "none") {
        sharePanel.style.display = "flex";
    } else {
        sharePanel.style.display = "none";
    }
});

const shareButtonMobile = document.querySelector(".mobile-share-in-panel");
shareButtonMobile.addEventListener("click", event => {
    console.log("hello");
    if (sharePanel.style.display === "none") {
        sharePanel.style.display = "flex";
    } else {
        sharePanel.style.display = "none";
    }
});