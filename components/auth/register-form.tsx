"use client";
import React from "react";
import { CardWrapper } from "./card-wrapper";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "./form-error";
import FormSucces from "./form-success";
import { useTransition,useState } from "react";
import Register from "@/actions/register";

const RegisterForm = () => {

    const [error,seterror] = useState<string | undefined>("");
    const [success,setsuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();


  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit = (values: z.infer<typeof RegisterSchema>) => {
    seterror("");
    setsuccess("");

    startTransition(() => {
        Register(values)
        .then((data) => {
            seterror(data.error);
            setsuccess(data.sucess);
        })
    })
  };

  return (
    <CardWrapper
      headerlabel="Register page"
      backbuttonlabel="Alreday have an account"
      backbuttonhref="/auth/login"
      showsocial
    >
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onsubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input disabled={isPending} {...field} placeholder="Username" type="text" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input disabled={isPending} {...field} placeholder="test@gmail.com" type="email" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input disabled={isPending} {...field} placeholder="******" type="password" />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormError message={error}  />
          <FormSucces message={success} />
          <Button className="w-full">
            Create An Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
