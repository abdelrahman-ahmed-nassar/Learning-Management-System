"use client";

import { LoginForm } from "./LoginForm/LoginForm";

import loginImage from "@/public/assets/images/forms/login.jpeg";
import FormWrapper from "../_components/layout/FormPageWrapper/FormPageWrapper";

export default function Page() {
  return (
    <FormWrapper image={loginImage}>
      <LoginForm></LoginForm>
    </FormWrapper>
  );
}
