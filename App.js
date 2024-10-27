import React from "react";
import { SafeAreaView } from "react-native";
import s from "./styles/styles";

import Header from "./components/shared/Header";
import Content from "./components/shared/Content";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <SafeAreaView style={s.container}>
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
};

export default App;
