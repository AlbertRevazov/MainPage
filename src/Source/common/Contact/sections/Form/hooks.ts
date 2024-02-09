import React from "react";
import { send } from "emailjs-com";
import { toast } from "react-toastify";

export const useFormHook = () => {
  const [toSend, setToSend] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setToSend((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => setToSend((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await send(
        "service_x7o7bhu",
        "template_fxyfaiq",
        toSend,
        "_qyHVdzaAP9u0bOTT"
      );
      toast.success("The email has been sent");
      setToSend({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Sending error");
    }
  };

  return { handleSubmit, handleChange, handleTextAreaChange, toSend };
};
