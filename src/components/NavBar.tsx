import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { propsSearchInput } from "./SearchInput";

const NavBar = ({
  onFormSubmition: onFormSubmitionFromSeachInput,
}: propsSearchInput) => {
  return (
    <HStack padding={3}>
      <Image src={logo} boxSize="60px" />
      <SearchInput
        onFormSubmition={(searchValue) =>
          onFormSubmitionFromSeachInput(searchValue)
        }
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
