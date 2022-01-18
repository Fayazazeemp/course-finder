import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "16px",
    width: "300px",
    height: "280px",
    alignContent: "stretch",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  textfield: {
      height:"50px",
    margin: "20px",
  },
  iddate: {
    display: "flex",
    width: "95%",
    justifyContent: "space-between",
  },
  heading: {
    height: "70px",
    marginTop: "20px",
  },
  parent: {
    height: "40px",
    flexDirection: "column",
  },
  provider: {
    marginBottom: "10px",
  },
  pagination: {
    margin: "20px",
  },
}));

export default useStyles;
