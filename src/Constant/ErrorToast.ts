import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Style.css";

// Type personnalisé pour limiter les valeurs possibles de "type"
type ToastType = "error" | "success" | "info";

export default function errorToast(
  message: string,
  type: ToastType = "info", // Type par défaut
  closeToast?: () => void
): void {
  // Options Toastify communes
  const commonOptions = {
    position: "top-center" as const,
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored" as const,
    transition: Bounce,
    onClose: closeToast, // Appel de la fonction closeToast lorsqu'elle est fournie
  };

  // Gestion des différents types de notifications
  switch (type) {
    case "error":
      toast.error(message, commonOptions);
      break;
    case "success":
      toast.success(message, commonOptions);
      break;
    case "info":
    default:
      toast.info(message, commonOptions);
      break;
  }
}
