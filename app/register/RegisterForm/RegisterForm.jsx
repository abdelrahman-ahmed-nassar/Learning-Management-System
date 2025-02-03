import React from "react";

import "./RegisterForm.scss";
import Link from "next/link";

import { FaPhoneFlip } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsPersonPlus } from "react-icons/bs";

import FormContainer from "@/app/_components/UI/FormContainer/FormContainer";

import { Button, Form, Input, Select, Space, ConfigProvider } from "antd";

const { Option } = Select;

const places = [
  {
    label: "القاهرة",
    value: "القاهرة",
  },
  {
    label: "الإسكندرية",
    value: "الإسكندرية",
  },
  {
    label: "الجيزة",
    value: "الجيزة",
  },
  {
    label: "أسوان",
    value: "أسوان",
  },
  {
    label: "أسيوط",
    value: "أسيوط",
  },
  {
    label: "البحيرة",
    value: "البحيرة",
  },
  {
    label: "بني سويف",
    value: "بني سويف",
  },
  {
    label: "بورسعيد",
    value: "بورسعيد",
  },
  {
    label: "دمياط",
    value: "دمياط",
  },
  {
    label: "الدقهلية",
    value: "الدقهلية",
  },
  {
    label: "الفيوم",
    value: "الفيوم",
  },
  {
    label: "الغربية",
    value: "الغربية",
  },
  {
    label: "الإسماعيلية",
    value: "الإسماعيلية",
  },
  {
    label: "كفر الشيخ",
    value: "كفر الشيخ",
  },
  {
    label: "مطروح",
    value: "مطروح",
  },
  {
    label: "المنيا",
    value: "المنيا",
  },
  {
    label: "المنوفية",
    value: "المنوفية",
  },
  {
    label: "الوادي الجديد",
    value: "الوادي الجديد",
  },
  {
    label: "شمال سيناء",
    value: "شمال سيناء",
  },
  {
    label: "القليوبية",
    value: "القليوبية",
  },
  {
    label: "قنا",
    value: "قنا",
  },
  {
    label: "البحر الأحمر",
    value: "البحر الأحمر",
  },
  {
    label: "الشرقية",
    value: "الشرقية",
  },
  {
    label: "سوهاج",
    value: "سوهاج",
  },
  {
    label: "جنوب سيناء",
    value: "جنوب سيناء",
  },
  {
    label: "السويس",
    value: "السويس",
  },
];
const genders = [
  {
    label: "ذكر",
    value: "ذكر",
  },
  {
    label: "أنثى",
    value: "أنثى",
  },
];

const grades = [
  {
    label: "الصف الأول الإعدادي",
    value: "الصف الأول الإعدادي",
  },
  {
    label: "الصف الثاني الإعدادي",
    value: "الصف الثاني الإعدادي",
  },
  {
    label: "الصف الثالث الإعدادي",
    value: "الصف الثالث الإعدادي",
  },
  {
    label: "الصف الأول الثانوي",
    value: "الصف الأول الثانوي",
  },
  {
    label: "الصف الثاني الثانوي",
    value: "الصف الثاني الثانوي",
  },
  {
    label: "الصف الثالث الثانوي",
    value: "الصف الثالث الثانوي",
  },
];

export function RegisterForm() {
  return (
    <FormContainer>
      <div className="RegisterForm Form">
        <h2 className="form-title">
          {" "}
          <span>انشئ </span>
          <span className="colored">حسابك الآن :</span>
        </h2>
        <p className="form-description">
          ادخل بياناتك بشكل صحيح للحصول علي افضل تجربة داخل الموقع{" "}
        </p>

        <Form>
          <div className="form-group">
            <div className="for-item form-item-group">
              <Form.Item
                className="form-item"
                name="first-name"
                label={
                  <label htmlFor="first-name" className="form-label">
                    <span className="icon">
                      <BsPersonPlus />
                    </span>
                    <span>الاسم الاول</span>
                  </label>
                }
                layout="vertical"
              >
                <Input
                  id="first-name"
                  type="text"
                  className="form-input"
                  required
                  autoFocus
                />
              </Form.Item>
              <Form.Item
                className="form-item"
                name={"last-name"}
                label={
                  <label htmlFor="last-name" className="form-label">
                    <span className="icon">
                      <BsPersonPlus />
                    </span>
                    <span>الاسم الأخير</span>
                  </label>
                }
                layout="vertical"
              >
                <Input
                  id="last-name"
                  type="text"
                  className="form-input"
                  required
                />
              </Form.Item>
            </div>
            <div className="for-item form-item-group">
              <Form.Item
                className="form-item"
                name={"phone"}
                label={
                  <label htmlFor="phone" className="form-label">
                    <span className="icon">
                      <FaPhoneFlip />
                    </span>
                    <span>رقم الهاتف</span>
                  </label>
                }
                layout="vertical"
              >
                <Input id="phone" type="tel" className="form-input" required />
              </Form.Item>
              <Form.Item
                className="form-item"
                name={"parent-phone"}
                label={
                  <label htmlFor="parent-phone" className="form-label">
                    <span className="icon">
                      <FaPhoneFlip />
                    </span>
                    <span>رقم هاتف ولي الأمر</span>
                  </label>
                }
                layout="vertical"
              >
                <Input
                  id="parent-phone"
                  type="tel"
                  className="form-input"
                  required
                />
              </Form.Item>
            </div>
            <div className="selection-group">
              <Form.Item
                name="gender"
                rules={[{ required: true }]}
                className="form-item"

              >
                <Select
                  placeholder="النوع"
                  allowClear
                  className="select"
                  showSearch
                  options={genders}
                />
              </Form.Item>
              <Form.Item className="form-item">
                <Select
                  name="place"
                  id="place"
                  placeholder="المحافظة"
                  showSearch
                  options={places}
                />
              </Form.Item>
              <Form.Item className="form-item">
                <Select
                  name="grade"
                  id="grade"
                  placeholder="الصف الدراسي"
                  showSearch
                  options={grades}

                />
              </Form.Item>
              <Form.Item
                className="form-item"
                label={
                  <label htmlFor="email" className="form-label">
                    <span className="icon">
                      <FaPhoneFlip />
                    </span>
                    <span>البريد الإلكتروني (اختياري)</span>
                  </label>
                }
                layout="vertical"
                name={"email"}
              >
                <Input id="email" type="email" className="form-input" />
              </Form.Item>
            </div>

            <div className="for-item form-item-group">
              <Form.Item
                className="form-item"
                label={
                  <label htmlFor="password" className="form-label">
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <span>كلمة السر</span>
                  </label>
                }
                name="password"
                layout="vertical"
              >
                <Input.Password
                  id="password"
                  type="password"
                  className="form-input"
                />
              </Form.Item>
              <Form.Item
                className="form-item"
                name={"check-password"}
                layout="vertical"
                label={
                  <label htmlFor="check-password" className="form-label">
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <span>تأكيد كلمة السر</span>
                  </label>
                }
              >
                <Input.Password
                  id="check-password"
                  type="password"
                  className="form-input"
                  required
                />
              </Form.Item>
            </div>
            <Form.Item className="form-item">
              <button type="submit" className="button-primary">
                انشئ الحساب !
              </button>
            </Form.Item>
          </div>
        </Form>

        <div className="footer-text">
          يوجد لديك حساب بالفعل؟{" "}
          <Link href="/login" className="login-link">
            ادخل إلى حسابك الآن !
          </Link>
        </div>
      </div>
    </FormContainer>
  );
}
