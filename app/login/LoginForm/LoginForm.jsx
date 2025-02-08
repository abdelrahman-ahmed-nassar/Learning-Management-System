import React from "react";

import "./loginForm.scss";
import Link from "next/link";

import { FaPhoneFlip } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

import { Switch } from "antd";

import { Button, Form, Input, Select, Space, ConfigProvider } from "antd";

const { Option } = Select;

export function LoginForm() {
  return (
    <div className="LoginForm">
      <h2 className="form-title">
        <span>تسجيل </span>
        <span className="colored">الدخول :</span>
      </h2>
      <p className="form-description">
        ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
      </p>

      <Form>
        <div className="form-container">
          <div className="form-items">
            <Form.Item
              name={"tel"}
              className="form-item"
              label={
                <label className="form-label" htmlFor="tel">
                  <span className="icon">
                    <FaPhoneFlip />
                  </span>
                  <span>رقم الهاتف</span>
                </label>
              }
              layout="vertical"
            >
              <Input id="tel" type="tel" className="form-input" required />
            </Form.Item>
            <Form.Item
              className="form-item"
              name={"password"}
              label={
                <label htmlFor="password" className="form-label">
                  <span className="icon">
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
                className="form-input"
                required
              />
            </Form.Item>
          </div>

          <div className="code-login form-item">
            <p>أو قم بالتسجيل عن طريق الكود</p>
            <div>
              <Switch></Switch>
            </div>
          </div>
          <Form.Item className="form-item">
            <button type="submit" className="button-primary">
              تسجيل الدخول
            </button>
          </Form.Item>
        </div>
      </Form>

      <div className="footer-text">
        لا يوجد لديك حساب ؟{" "}
        <Link href="/register" className="register-link">
          أنشئ حسابك الآن!
        </Link>
      </div>
    </div>
  );
}
