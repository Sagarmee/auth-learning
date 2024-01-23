import React from "react";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields) {
    return {
      error: "Invalid fields !!",
    };
  }

  return {
    sucess: "Email sent!",
  };
};

export default Register;
