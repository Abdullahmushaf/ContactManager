import { colors } from "@mui/material";
import bg from "../../../assets/img/bg.jpg";

const styles = {
  header: {
    padding: "110px 0",
    background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${bg}) no-repeat center center/cover`,

    "& h1": {
      //   textAlign: { xs: "left", sm: "center", lg: "right" },
      textAlign: "center",
      color: "#eee",
    },
  },
};

export default styles;
