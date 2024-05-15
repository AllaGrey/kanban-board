import React from "react";
import { SearchButton } from "../SearchButton/SearchButton";
// import { useForm } from "react-hook-form";
import { SearchInput, SearchForm } from "./SearchBar.styled";

export const SearchBar: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm();
  return (
    <SearchForm>
      <SearchInput />
      <SearchButton />
    </SearchForm>
  );
};
