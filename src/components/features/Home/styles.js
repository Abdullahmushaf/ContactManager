const styles = {
  container: {
    "& .list-container": {
      height: "450px",
      py: 4,
      px: 4,
      borderRadius: "8px",
      backgroundColor: "#efefef",
      overflowY: "auto",
    },
  },

  form: {
    backgroundColor: "#efefef",
    borderRadius: "8px",
    py: 4,
    px: 4,
    height: "450px",
  },

  list: {
    "& .MuiListItem-root": {
      mb: 2,

      "&:last-child": {
        mb: 0,
      },
    },
  },

  input: {
    backgroundColor: "#fff",
    color: "#333",
  },
};

export default styles;
