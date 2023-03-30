import { toast } from "react-toastify";

export const notify = (type: string, text: string) => {
  //@ts-ignore
  toast[type](text, {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
  });
}

export const getData = (name: string) => JSON.parse(localStorage.getItem(name)!);