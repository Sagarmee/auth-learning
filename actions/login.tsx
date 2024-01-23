import React from "react";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields) {
    return {
      error: "Invalid fields !!",
    };
  }

  return {
    sucess: "Email sent!",
  };
};

export default Login;
