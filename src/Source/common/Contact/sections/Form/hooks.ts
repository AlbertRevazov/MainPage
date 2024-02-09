import React from "react";
import { send } from "emailjs-com";

type useFormReturn = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  toSend: {
    name: string;
    email: string;
    message: string;
  };
};

export const useFormHook = (): useFormReturn => {
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await send(
        "service_x7o7bhu",
        "template_fxyfaiq",
        toSend,
        "_qyHVdzaAP9u0bOTT"
      );
      setToSend({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("Sending error");
    }
  };

  return { handleSubmit, handleChange, handleTextAreaChange, toSend };
};
