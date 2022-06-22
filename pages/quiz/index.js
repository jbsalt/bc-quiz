import React, { createContext, useState } from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import Content from "../../components/content";

export default function Quiz(props) {
  const { children, title } = props;

  return (
    <Page>
      <Header title="Book Creator" subtitle="Quiz" />
      <Content>{children}</Content>
    </Page>
  );
}
