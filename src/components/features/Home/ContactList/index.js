import { List, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "../styles";
import ListItem from "../../../common/ListItem";

const ContactList = ({ contactsArr }) => {
  return (
    <>
      <TextField label="Search Contacts" fullWidth sx={{ mb: 2 }} />
      <List sx={styles.list}>
        {contactsArr && contactsArr.length ? (
          contactsArr.map((data) => (
            <ListItem
              key={data.id}
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              contact={data.contact}
            />
          ))
        ) : (
          <Typography variant="body2">No contact found.</Typography>
        )}
      </List>
    </>
  );
};

export default ContactList;
