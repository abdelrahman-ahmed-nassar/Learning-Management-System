import React from "react";

import Link from "next/link";

import { FaPhoneFlip } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

import { Switch } from "antd";

import { Form, Input, Select } from "antd";

const { Option } = Select;

export function LoginForm() {
  return (
    <div data-ui="login-form" className="mb-12 flex max-w-[80%] flex-col gap-7">
      <h2 className="m-0 text-2xl font-bold">
        <span>تسجيل </span>
        <span className="text-primary dark:text-primary-300">الدخول :</span>
      </h2>
      <p className="text-lg text-secondaryTxt">
        ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
      </p>

      <Form>
        <div data-ui="form-container" className="flex flex-col gap-5">
          <div data-ui="form-items" className="flex flex-col gap-10">
            <Form.Item
              name={"tel"}
              className="mb-7 flex flex-col"
              label={
                <label
                  className="mb-0 flex cursor-pointer items-center pb-0 text-xl font-bold text-secondaryTxt transition-all"
                  htmlFor="tel"
                >
                  <span className="ml-3 align-middle">
                    <FaPhoneFlip />
                  </span>
                  <span>رقم الهاتف</span>
                </label>
              }
              layout="vertical"
            >
              <Input
                id="tel"
                type="tel"
                className="rounded-none !border-0 !border-b-[3px] !border-secondaryTxt bg-primaryBg !outline !outline-4 !outline-primaryBg transition-colors rtl focus:!border-primary"
                required
              />
            </Form.Item>
            <Form.Item
              className="mb-7 flex flex-col"
              name={"password"}
              label={
                <label
                  htmlFor="password"
                  className="mb-0 flex cursor-pointer items-center pb-0 text-xl font-bold text-secondaryTxt transition-all"
                >
                  <span className="ml-3 align-middle">
                    <RiLockPasswordFill />
                  </span>
                  <span>كلمة السر</span>
                </label>
              }
              layout="vertical"
            >
              <Input.Password
                id="password"
                type="password"
                className="rounded-none !border-0 !border-b-[3px] !border-secondaryTxt bg-primaryBg !outline !outline-4 !outline-primaryBg transition-colors rtl"
                required
              />
            </Form.Item>
          </div>

          <div className="flex flex-row items-center justify-between text-xl text-primaryTxt">
            <p>أو قم بالتسجيل عن طريق الكود</p>
            <div>
              <Switch></Switch>
            </div>
          </div>
          <Form.Item className="mb-7 flex flex-col">
            <button
              type="submit"
              className="cursor-pointer rounded border-2 border-transparent bg-primary px-3 py-2 text-white transition-all hover:border-primary hover:bg-transparent hover:text-primary"
            >
              تسجيل الدخول
            </button>
          </Form.Item>
        </div>
      </Form>

      <div data-ui="footer-text" className="mt-4 text-lg text-secondaryTxt">
        لا يوجد لديك حساب ؟{" "}
        <Link
          href="/register"
          className="text-secondary dark:text-secondary-300"
        >
          أنشئ حسابك الآن!
        </Link>
      </div>
    </div>
  );
}
