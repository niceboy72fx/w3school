import React, { useRef, useState } from "react";
import "./ForgotPassword.scss";
import { Button } from "antd";
import { Outlet, useLocation, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/reducer/auth";
import {
  ResetPasswordEmail,
  ResetPasswordForm,
} from "../../service/apiInstance";
import { useSearchParams } from "react-router-dom";
import { TOAST_MESSAGE } from "../../redux/reducer/toastMessage";
const ForgotPassword = () => {
  return (
    <section className="forgot flex justify-center items-center">
      <Outlet />
      {/* <ResetPassword /> */}
    </section>
  );
};

export const EmailConfirm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const reset = (e) => {
    e.preventDefault();
    const data = { email: email };
    ResetPasswordEmail(dispatch, data);
  };

  return (
    <div className="forgot-form shadow-2xl">
      <form className="flex flex-col gap-4 w-full">
        <div>
          <div className="mb-5  block">
            <h3 className="font-bold">Please type your email</h3>
          </div>
          <div className="intro-search-input m-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
            <input
              className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
              type="search"
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "white" }}
              placeholder="example@example.com"
            />
            <div className="frame-name-button mr-10">
              <button
                className="name-button-browse hide"
                onClick={(e) => reset(e)}
              >
                Forgot password !
              </button>
            </div>
          </div>
          <button
            className="name-button-browse hiden"
            onClick={(e) => reset(e)}
          >
            Forgot password !
          </button>
        </div>
      </form>
    </div>
  );
};

export const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { token } = useParams();
  const queryParams = new URLSearchParams(search);
  const email = queryParams.get("email");

  const Submit = (e) => {
    e.preventDefault();
    if (password === rePassword && password !== "") {
      const data = {
        email: email,
        password: password,
        password_confirmation: rePassword,
        token: token,
      };
      ResetPasswordForm(dispatch, data);
    } else {
      dispatch(
        TOAST_MESSAGE({
          type: "warning",
          content: "password not match !",
          duration: 5,
        })
      );
    }
  };

  return (
    <section className="forgot flex justify-center items-center">
      <div className="forgot-form shadow-2xl">
        <form className="flex flex-col gap-4 w-full">
          <div>
            <div>
              <div className="mt-8 mb-8">
                <div className="mb-5  block">
                  <h3 className="font-bold">Please type your new password!</h3>
                </div>
                <div className="intro-search-input mt-2 mb-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
                  <input
                    className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: "white" }}
                    placeholder="new password!"
                  />
                </div>
              </div>
              <div className="mt-8 mb-8">
                <div className="mb-5  block">
                  <h3 className="font-bold">Re-type your new password !l</h3>
                </div>
                <div className="intro-search-input mt-2 mb-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
                  <input
                    className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
                    type="password"
                    onChange={(e) => setRePassword(e.target.value)}
                    style={{ backgroundColor: "white" }}
                    placeholder="re-enter new password !"
                  />
                </div>
              </div>
            </div>
            <div className="frame-name-button flex justify-center">
              <button className="name-button-browse " onClick={Submit}>
                Reset password !
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export const EmailSent = () => {
  return (
    <div className="forgot-form shadow-2xl">
      <form className="flex flex-col gap-4 w-full">
        <div>
          <div className="mb-5  block">
            <h3 className="font-bold text-2xl text-center mb-8">
              Your Email was sent !
            </h3>
            <p>Please check your mailbox and got link to reset password !</p>
          </div>
          <div className="frame-name-button mr-10 flex justify-center">
            <button
              className="name-button-browse "
              onClick={window.location.replace("/auth/login")}
            >
              Back to Login !
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
