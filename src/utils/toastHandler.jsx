import { toast } from "react-hot-toast";

export const showToast = (message) => {
  toast(message, {
    style: {
      background: "#000",
      color: "#fff",
      border: "1px solid #FFF",
      textAlign: "center",
    },
  });
};
