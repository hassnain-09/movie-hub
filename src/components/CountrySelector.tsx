import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import useCountries, { Country } from "../hooks/useCountires";
import { FaAngleDown } from "react-icons/fa";

interface props {
  onSelectedCountry: (country: Country) => void;
  selectedCountry: Country | null;
}

function CountrySelector({ onSelectedCountry, selectedCountry }: props) {
  const { error, countries } = useCountries();
  if (error) return null;
  return (
    <>
      <Menu colorScheme="gray" preventOverflow>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          {selectedCountry?.english_name || "Country"}
        </MenuButton>
        <MenuList minWidth="240px" overflowY="auto" maxHeight="300px">
          <MenuOptionGroup title="" type="checkbox">
            {countries?.map((country) => (
              <MenuItemOption
                value={country.iso_3166_1}
                key={country.iso_3166_1}
                onClick={() => onSelectedCountry(country)}
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
