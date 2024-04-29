import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useMenuItem,
} from "@chakra-ui/react";
import useCountries from "../hooks/useCountires";
import { FaAngleDown } from "react-icons/fa";

function CountrySelector() {
  const { error, countries } = useCountries();
  if (error) return null;
  return (
    <>
      <Menu colorScheme="gray" preventOverflow>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Country
        </MenuButton>
        <MenuList minWidth="240px" overflowY="auto" maxHeight="300px">
          <MenuOptionGroup title="" type="checkbox">
            {countries?.map((country) => (
              <MenuItemOption
                value={country.iso_3166_1}
                key={country.iso_3166_1}
              >
                {country.english_name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
}

export default CountrySelector;
