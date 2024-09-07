import { List, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "../styles";
import ListItem from "../../../common/ListItem";
import ContactContext from "../../../../context/contact/contactContext";

const ContactList = () => {
  const { contacts, currentContactHandler, updateContactHandler } = useContext(ContactContext);
  return (
    <>
      <TextField label="Search Contacts" fullWidth sx={{ mb: 2 }} />
      <List sx={styles.list}>
        {contacts && contacts.length ? (
          contacts.map((data) => (
            <ListItem
              key={data.id}
              id={data.id}
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              contact={data.contact}
              currentContactHandler={currentContactHandler}
              updateContactHandler={updateContactHandler}
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
