import React, { useRef, useState } from "react";
import "./homepage.css";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";

const HomePage = () => {
  const ref = useRef(null);

  return (
    <>
      <Header />
      <Form />
    </>
  );
};

export default HomePage;
