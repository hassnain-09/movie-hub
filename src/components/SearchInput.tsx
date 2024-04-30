import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export interface propsSearchInput {
  onFormSubmition: (searchValue: string | null) => void;
}

function SearchInput({ onFormSubmition }: propsSearchInput) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmition = (e: FormEvent) => {
    e.preventDefault();
    onFormSubmition(ref.current?.value || null);
  };
  return (
    <form onSubmit={handleSubmition}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaSearch />} />
        <Input
          type="text"
          placeholder="Search movies....."
          borderRadius={20}
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
