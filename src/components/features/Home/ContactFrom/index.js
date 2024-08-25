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
import React from "react";
import styles from "../styles";

const ContactForm = () => {
  return (
    <Box component="form" sx={styles.form}>
      <Stack direction="row" gap={2} mb={2}>
        <TextField label="First Name" fullWidth sx={styles.input} />
        <TextField label="Last Name" fullWidth sx={styles.input} />
      </Stack>
      <TextField
        label="Email"
        type="email"
        fullWidth
        sx={{ ...styles.input, mb: 2 }}
      />
      <TextField
        label="Phone #"
        type="number"
        fullWidth
        sx={{ ...styles.input, mb: 2 }}
      />
      <FormControl sx={{ display: "block", mb: 2 }}>
        <FormLabel id="contactType">Contact Type</FormLabel>
        <RadioGroup
          aria-labelledby="contactType"
          defaultValue="personal"
          name="radio-buttons-group"
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
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
