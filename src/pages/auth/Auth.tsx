import React, { useEffect, useRef, useState } from "react";
import "./auth.scss";
import Image from "../../assert/logo/W3Schools_logo.svg";
import { Tabs } from "antd";
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, register } from "../../redux/reducer/auth";
import { useParams } from "react-router";
import { RouterConfig } from "../../util/router-config-url";

const FormAuth: React.FC<{ func: void }> = ({ func }) => {
  const { pathAuth } = useParams<string>();
  RouterConfig();
  let auth: string = "1";
  if (pathAuth === "login") {
    auth = "1";
  } else if (pathAuth === "register") {
    auth = "2";
  }
  return (
    <section className="auth ">
      <img src={Image} className="h-14 w-14 fixed m-10" />
      <div className="auth-panel ">
        <Tabs
          className="m-10"
          defaultActiveKey={auth}
          tabBarStyle={{
            display: "flex",
            justifyContent: "space-between",
          }}
          items={[
            {
              label: "LogIn",
              key: "1",
              children: <Login />,
            },

            {
              label: "SignUp",
              key: "2",
              children: <SignUp />,
            },
          ]}
        />
      </div>
    </section>
  );
};

const FormBox: React.FC<{ name: any }> = ({ name }) => {
  const email = useRef<HTMLDivElement | string>(null);
  const password = useRef<HTMLDivElement | string>(null);
  const rePass = useRef<HTMLDivElement | string>(null);
  const dispatch = useDispatch();
  const buttonSubmit = (event) => {
    event.preventDefault();

    if (name == "LogIn") {
      const data: any = {
        email: email.current?.value,
        password: password.current?.value,
      };
      dispatch(logIn(data));
    } else {
      if (password.current?.value === rePass.current?.value) {
        const data: any = {
          email: email.current?.value,
          password: password.current?.value,
        };
        dispatch(register(data));
      }
    }
  };

  return (
    <div className="m-8">
      +
      <form className="flex flex-col gap-4 w-full">
        <h1 className="font-bold mb-10">{name}</h1>
        <div>
          <div className="mb-5  block">
            <h3 className="font-bold">Your Email</h3>
          </div>
          <div className="intro-search-input m-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
            <input
              className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
              type="search"
              ref={email}
              style={{ backgroundColor: "white" }}
              placeholder="example@example.com"
            />
          </div>
        </div>
        <div>
          <div className="mb-5 block">
            <h3 className="font-bold">Your Password</h3>
          </div>
          <div className="intro-search-input m-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
            <input
              className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
              type="search"
              ref={password}
              style={{ backgroundColor: "white" }}
              placeholder="Your password !"
            />
          </div>
        </div>
        {name == "LogIn" ? (
          <a className="m-1">Forget your password?</a>
        ) : (
          <div>
            <div className="mb-5 block">
              <h3 className="font-bold">Re-type password</h3>
            </div>
            <div className="intro-search-input m-2  flex flex-row items-center outline outline-1  h-full bg-white  rounded-3xl ">
              <input
                className="outline-none border-none ml-2 mr-2  hover:not-italic font-bold w-96 h-11"
                type="search"
                ref={rePass}
                style={{ backgroundColor: "white" }}
                placeholder="Re-type password !"
              />
            </div>
          </div>
        )}
        <Button
          type="submit"
          color="success"
          className="bg-green-600 mt-9 text-2xl p-2 rounded-3xl font-bold"
          onClick={(event) => buttonSubmit(event)}
        >
          {name}
        </Button>
      </form>
    </div>
  );
};

const Login: React.FC = () => {
  return (
    <>
      <FormBox name="LogIn" />
    </>
  );
};
const SignUp: React.FC = () => {
  return (
    <>
      <FormBox name="Register" />
    </>
  );
};

export default FormAuth;
