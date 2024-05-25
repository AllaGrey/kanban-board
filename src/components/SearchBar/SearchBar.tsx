import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getBoard } from "../../redux/operations";
import { AppDispatch } from "../../redux/store";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchInput, SearchForm } from "./SearchBar.styled";

interface SearchFormData {
  search: string;
}

export const SearchBar: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<SearchFormData>({
    defaultValues: {
      search: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSearchSubmit = ({ search }: SearchFormData) => {
    if (search) {
      dispatch(getBoard(search));
    }
  };
  return (
    <SearchForm onSubmit={handleSubmit(onSearchSubmit)}>
      <SearchInput
        {...register("search")}
        onChange={(e) => setValue("search", e.target.value)}
        placeholder="Search"
        type="text"
        name="search"
        id="search"
      />
      <SearchButton />
    </SearchForm>
  );
};
