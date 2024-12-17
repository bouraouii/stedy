import CryptoJS from "crypto-js";

/**
 * Fonction pour chiffrer un message
 * @param {string} message - Le message à chiffrer
 * @returns {string} - Le message chiffré
 */
export function cryptage(message:string) {
  if (!message) {
    throw new Error("Le message doit être fourni.");
  }
  const cle = "ma-cle-secrete"; // Clé par défaut
  return CryptoJS.AES.encrypt(message, cle).toString();
}

/**
 * Fonction pour déchiffrer un message
 * @param {string} messageCrypte - Le message chiffré
 * @returns {string} - Le message déchiffré
 */
export function decryptage(messageCrypte:string) {
  if (!messageCrypte) {
    throw new Error("Le message chiffré doit être fourni.");
  }
  const cle = "ma-cle-secrete"; // Clé par défaut
  const bytes = CryptoJS.AES.decrypt(messageCrypte, cle);
  return bytes.toString(CryptoJS.enc.Utf8);
}


