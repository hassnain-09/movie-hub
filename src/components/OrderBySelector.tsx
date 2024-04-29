import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

interface props {
  onOrderOptionSelect: (option: string) => void;
  selectedOrderByOption: string | null;
}

function OrderBySelector({
  onOrderOptionSelect,
  selectedOrderByOption,
}: props) {
  const order_by_options = [
    "release_date",
    "popularity",
    "vote_average",
    "title",
  ];
  return (
    <>
      <Menu colorScheme="gray" preventOverflow>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          {selectedOrderByOption
            ? "Order by: " +
              selectedOrderByOption
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "Order by:"}
        </MenuButton>
        <MenuList minWidth="240px" overflowY="auto" maxHeight="300px">
          {order_by_options.map((option) => (
            <MenuItem
              value={option}
              onClick={() => onOrderOptionSelect(option)}
            >
              {option
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default OrderBySelector;
