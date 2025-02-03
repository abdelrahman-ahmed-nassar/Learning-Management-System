"use client";

// filepath: /e:/Programming/projects/lms_2/src/app/login/page.jsx
import "./Register.scss";

import registerImage from "@/public/assets/images/forms/register.jpeg";
import FormWrapper from "../_components/layout/FormPageWrapper/FormPageWrapper";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export default function Page() {
  return (
    <FormWrapper image={registerImage} >
      <RegisterForm></RegisterForm>
    </FormWrapper>
  );
}
