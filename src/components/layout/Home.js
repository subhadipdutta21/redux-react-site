import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const Home = () => {
  return (
    <div
      className="container"
      style={{
        width: "800px",
        margin: "auto",
        textAlign: "center",
        paddingTop: "50px"
      }}
    >
      <Paper style={{ padding: "50px" }} elevation={5}>
        <Typography component="h2" variant="display3" gutterBottom>
          Welcome,please register to continue !
        </Typography>
      </Paper>
    </div>
  );
};

export default Home;
