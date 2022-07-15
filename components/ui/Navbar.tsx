import React from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href={"/"} passHref>
          <Link>
            <Typography variant="h6" color={"white"}>
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href={"/theme-change"} passHref>
          <Link>
            <Typography variant="h6" color={"white"}>
              Cambiar Tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
