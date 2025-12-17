import React from "react";
import { SearchContainer, StyledInput } from "./style";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Search({
  value,
  onChange,
  placeholder = "Поиск по названию...",
}: SearchProps) {
  return (
    <SearchContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
      />
    </SearchContainer>
  );
}
