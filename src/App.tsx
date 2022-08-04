import "./styles.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { OurStores } from "./pages/OurStores";
import { ProductItemPage } from "./pages/ProductItemPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <AppWrap>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<ProductItemPage />} />
        <Route path="/contacts" element={<OurStores />} />
      </Routes>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  background-color: #f5f5f6;
  font-family: "Inter", sans-serif;
`;
