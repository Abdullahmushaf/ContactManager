import React, { useContext } from "react";
import Default from "../../layout/Default";
import Header from "../../common/Header";
import { Stack, Box, Container } from "@mui/material";
import styles from "./styles";
import ContactForm from "./ContactFrom";
import ContactList from "./ContactList";
import ContactContext from "../../../context/contact/contactContext";

const Home = () => {
  return (
    <Default>
      <Header title="Manage your contacts in an easy way" />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Stack direction="row" columnGap={5} sx={styles.container}>
          <Box flex={1} className="form">
            <ContactForm />
          </Box>
          <Box flex={1} className="list-container">
            <ContactList />
          </Box>
        </Stack>
      </Container>
    </Default>
  );
};

export default Home;
