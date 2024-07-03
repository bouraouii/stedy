import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function errorToast(message: string): void {
  toast.error(message, {
    className: "responsive-toast",
    autoClose: 10000,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
