import React from "react";
import { Button, Result } from "antd";
import { Header } from "./Header";
import Footer from "./Footer";

export const ErrorHandler = () => {
  return (
    <>
    <Header/>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
      <Footer/>
    </>
  );
};
