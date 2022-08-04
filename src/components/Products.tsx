import styled from "styled-components";
import { IProduct } from "../types";
import { ProductItem } from "./ProductItem";
import { Footer } from "../components/Footer";
import { productData } from "../data";
import { InputForm } from "./InputForm";
import { useState, ChangeEvent } from "react";

export const product: IProduct[] = productData;

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredProduct = (): IProduct[] => {
    if (search.length === 0) return product.slice(currentPage, currentPage + 9);
    const filtered = product.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    return filtered.slice(currentPage, currentPage + 9);
  };
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 9);
  };
  const nextPage = () => {
    if (
      product.filter((product) => product.name.includes(search)).length >
      currentPage + 9
    )
      setCurrentPage(currentPage + 9);
  };

  return (
    <>
      <InputForm search={search} handleSearch={handleSearch} />
      <ProductsWrap>
        {filteredProduct().map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsWrap>
      <Footer prevPage={prevPage} nextPage={nextPage} />
    </>
  );
};

const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 98vw;
  height: 93vh;
`;
