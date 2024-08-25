import React from "react";
import Default from "../../layout/Default";
import Header from "../../common/Header";
import { Stack, Box, Container } from "@mui/material";
import styles from "./styles";
import ContactForm from "./ContactFrom";
import ContactList from "./ContactList";

const index = () => {
  const contactsArr = [
    {
      id: 1,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 2,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 3,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 1,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 2,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 3,
      firstName: "Basit",
      lastName: "Hussain",
      email: "basit@email.com",
      contact: "+92 333 333 3333",
    },
  ];
  return (
    <Default>
      <Header title="Manage your contacts in an easy way" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Stack direction="row" columnGap={5} sx={styles.container}>
          <Box flex={1} className="form">
            <ContactForm />
          </Box>
          <Box flex={1} className="list-container">
            <ContactList contactsArr={contactsArr} />
          </Box>
        </Stack>
      </Container>
    </Default>
  );
};

export default index;
