import React, { FC } from "react";
import { Switcher } from "../../Switcher/Switcher";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuBurger: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isHome = window.location.pathname === "/";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isHome ? (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className={"menu__icon"} color="warning" />
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
              <a className={"burger__link"} href="/apps">
                MINI-APPS
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
            <MenuItem onClick={handleClose}>
              <a className={"burger__link"} href="#contact">
                CONTACT
              </a>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className={"menu__icon"} color="warning" />
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
          </Menu>
        </div>
      )}
      <Switcher />
    </>
  );
};
