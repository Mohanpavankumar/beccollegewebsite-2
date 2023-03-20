import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Box
        sx={{
          boxShadow: 27,
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          height: "80px",
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "100",
        }}
      >
        <div>
          <Link
            underline="none"
            variant="button"
            sx={{
              color: "#000",
              display: "flex",
              alignItems: "center",
              ml: 2,
            }}
          >
            <Box
              sx={{
                fontSize: 18,
                fontWeight: 600,
                pl: 1,
              }}
            >
              Vipani
            </Box>
          </Link>
        </div>
        <IconButton
          sx={{
            marginLeft: "auto",
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
            <ListItem
              sx={{
                width: "max-content",
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <IconButton
                sx={{
                  marginLeft: "auto",
                }}
              >
                <CloseIcon />
              </IconButton>
            </ListItem>
            <ListItem
              sx={{
                ml: -0.5,
              }}
              onClick={() => setOpenDrawer(false)}
            >
              <Button size="medium" href="#text-buttons">
                Apps
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button size="medium" href="#text-buttons">
                Business Types
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button size="medium" href="#text-buttons">
                Why Vipani?
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button size="medium" href="#text-buttons">
                Pricing
              </Button>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Button size="medium" href="#text-buttons">
                Resources
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
export default DrawerComponent;
