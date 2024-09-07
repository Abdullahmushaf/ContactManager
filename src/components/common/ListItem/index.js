import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemText,
  ListItem as MuiListItem,
  Stack,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ListItem = ({
  id,
  firstName,
  lastName,
  email,
  contact,
  currentContactHandler,
}) => {
  return (
    <MuiListItem
      sx={{
        boxShadow: "1px 3px 4px rgba(0,0,0,0.3)",
        py: 2,
        px: 1,
        borderRadius: "6px",
        border: "1px solid gray",
      }}
      secondaryAction={
        <Stack>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() =>
              currentContactHandler({
                id,
                firstName,
                lastName,
                email,
                contact,
                releation: "personal",
              })
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>{/* <ImageIcon /> */}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${firstName} ${lastName}`}
        secondary={
          <p className="flex gap-8">
            <span className="center">
              <LocalPhoneOutlinedIcon /> {contact}
            </span>
            {email && (
              <span className="center">
                <EmailOutlinedIcon /> {email}
              </span>
            )}
          </p>
        }
      />
    </MuiListItem>
  );
};

export default ListItem;
