import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  TextField,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles";
import ContactContext from "../../../../context/contact/contactContext";

const ContactForm = () => {
  const {
    currentContact,
    addContactHandler,
    updateContactHandler,
    clearCurrentContactHandler,
  } = useContext(ContactContext);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relation: "personal",
  });

  const inputChangeHandler = (e) =>
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  useEffect(() => {
    if (currentContact === null) return;

    setContactData({
      id: currentContact.id,
      firstName: currentContact.firstName,
      lastName: currentContact.lastName,
      email: currentContact.email ?? "",
      phone: currentContact.contact,
      relation: currentContact.relaltion ?? "personal",
    });
  }, [currentContact]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentContact !== null) {
      updateContactHandler({ id: currentContact.id, ...contactData });
      clearCurrentContactHandler();
    } else {
      addContactHandler({
        id: Math.floor(Math.random() * 999),
        ...contactData,
      });
    }

    setContactData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      relation: "personal",
    });
  };

  return (
    <Box component="form" onSubmit={submitHandler} sx={styles.form}>
      <Stack direction="row" gap={2} mb={2}>
        <TextField
          label="First Name"
          name="firstName"
          onChange={inputChangeHandler}
          value={contactData.firstName}
          fullWidth
          sx={styles.input}
        />
        <TextField
          label="Last Name"
          name="lastName"
          onChange={inputChangeHandler}
          value={contactData.lastName}
          fullWidth
          sx={styles.input}
        />
      </Stack>
      <TextField
        label="Email"
        type="email"
        name="email"
        onChange={inputChangeHandler}
        value={contactData.email}
        fullWidth
        sx={{ ...styles.input, mb: 2 }}
      />
      <TextField
        label="Phone #"
        type="number"
        name="phone"
        onChange={inputChangeHandler}
        value={contactData.phone}
        fullWidth
        sx={{ ...styles.input, mb: 2 }}
      />
      <FormControl sx={{ display: "block", mb: 2 }}>
        <FormLabel id="contactType">Contact Type</FormLabel>
        <RadioGroup
          aria-labelledby="contactType"
          defaultValue="personal"
          name="relation"
          onChange={inputChangeHandler}
          value={contactData.relation}
        >
          <FormControlLabel
            value="personal"
            control={<Radio />}
            label="Personal"
          />
          <FormControlLabel
            value="professional"
            control={<Radio />}
            label="professional"
          />
        </RadioGroup>
      </FormControl>

      <Button type="submit" variant="contained" fullWidth>
        {currentContact ? "Update " : "Add "} Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
