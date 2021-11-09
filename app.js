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

const socialIcons = document.querySelectorAll(".soc-icons");
socialIcons.forEach(socialIcon => {
    socialIcon.addEventListener("click", event => {
        console.log("close by clicking on social icon");
        if (sharePanel.style.display === "none") {
            sharePanel.style.display = "flex";
        } else {
            sharePanel.style.display = "none";
        }
    });
});