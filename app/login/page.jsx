"use client";

// filepath: /e:/Programming/projects/lms_2/src/app/login/page.jsx
import { LoginForm } from "./LoginForm/LoginForm";
import "./Login.scss";

import loginImage from "@/public/assets/images/forms/login.jpeg";
import FormWrapper from "../_components/layout/FormPageWrapper/FormPageWrapper";
import useGetTheme from "../_lib/Hooks/useGetTheme";

export default function Page() {
  return (
    <FormWrapper image={loginImage}>
      <LoginForm></LoginForm>
    </FormWrapper>
  );
}
