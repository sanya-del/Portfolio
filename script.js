// ================= FULL IMAGE VIEW =================

document.addEventListener("DOMContentLoaded", () => {

    const imageCards = document.querySelectorAll(
        ".certificate-card, .project-card, .achievement-card, .internship-card"
    );

    const imageModal = document.getElementById("certificateModal");
    const fullImage = document.getElementById("fullCertificateImage");
    const closeButton = document.getElementById("certificateClose");


    // Open image when card is clicked
    imageCards.forEach((card) => {

        card.addEventListener("click", (event) => {

            // Don't open image when clicking a project link
            if (event.target.closest(".project-link")) {
                return;
            }

            const image = card.querySelector("img");

            if (image) {
                fullImage.src = image.src;
                fullImage.alt = image.alt;

                imageModal.classList.add("active");
            }

        });

    });


    // Close using X
    closeButton.addEventListener("click", () => {
        imageModal.classList.remove("active");
    });


    // Close by clicking outside image
    imageModal.addEventListener("click", (event) => {

        if (event.target === imageModal) {
            imageModal.classList.remove("active");
        }

    });


    // Close using Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            imageModal.classList.remove("active");
        }

    });

});
// ================= SYMPOSIUM FULL VIEW =================

document.addEventListener("DOMContentLoaded", () => {

    const symposiumCards =
        document.querySelectorAll(".symposium-card");

    const certificateModal =
        document.getElementById("certificateModal");

    const fullCertificateImage =
        document.getElementById("fullCertificateImage");

    symposiumCards.forEach((card) => {

        card.addEventListener("click", () => {

            const image = card.querySelector("img");

            if (image) {

                fullCertificateImage.src = image.src;
                fullCertificateImage.alt = image.alt;

                certificateModal.classList.add("active");

            }

        });

    });

});
// ================= MERIT FULL VIEW =================

document.addEventListener("DOMContentLoaded", () => {

    const meritCards =
        document.querySelectorAll(".merit-card");

    const certificateModal =
        document.getElementById("certificateModal");

    const fullCertificateImage =
        document.getElementById("fullCertificateImage");

    meritCards.forEach((card) => {

        card.addEventListener("click", () => {

            const image = card.querySelector("img");

            if (image) {

                fullCertificateImage.src = image.src;
                fullCertificateImage.alt = image.alt;

                certificateModal.classList.add("active");

            }

        });

    });

});
// ================= ACHIEVEMENT PROOF FULL VIEW =================

document.addEventListener("DOMContentLoaded", () => {

    const proofCards =
        document.querySelectorAll(".achievement-proof");

    const certificateModal =
        document.getElementById("certificateModal");

    const fullCertificateImage =
        document.getElementById("fullCertificateImage");

    proofCards.forEach((card) => {

        card.addEventListener("click", () => {

            const image = card.querySelector("img");

            if (image) {

                fullCertificateImage.src = image.src;
                fullCertificateImage.alt = image.alt;

                certificateModal.classList.add("active");

            }

        });

    });

});