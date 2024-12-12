import React, { useState, useEffect } from "react";

const ScrollToTopHeader = () => {
  // État pour savoir si le bouton doit être visible
  const [isVisible, setIsVisible] = useState(false);

  // Vérifier la position du scroll
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Afficher le bouton après un certain défilement
    } else {
      setIsVisible(false); // Masquer le bouton si on est en haut
    }
  };

  // Ajouter un écouteur d'événements pour surveiller le défilement
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Fonction de défilement vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Défilement fluide
    });
  };

  return (
    <>
      {/* Bouton de retour en haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff", // Couleur bleu de Bootstrap (ou vous pouvez remplacer par une autre nuance)
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopHeader;
