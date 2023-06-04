import React, { FC } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuBurger: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className={"menu__icon"} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a className={"burger__link"} href="/">
            HOME
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={"burger__link"} href="#about">
            ABOUT
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={"burger__link"} href="#service">
            SERVICE
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={"burger__link"} href="#experience">
            EXPERIENCE
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};
