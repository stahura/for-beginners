import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import vscode from "./images/vscode.png";
import postman from "./images/postman.png";

const useStyles = makeStyles({
  root: {
    marginTop: "0px",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  },
  title: {
    fontFamily: "Moon",
  },
});

function Page2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ backgroundColor: "#ffffee" }}>
        <Typography
          variant="h1"
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            color: "#550055",
            fontFamily: "Moon",
            maxWidth: "748px",
          }}
        >
          Recommended Software
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            style={{
              marginLeft: "30px",
              marginTop: "50px",
              marginRight: "60px",
              height: "150px",
              width: "150px",
            }}
            image={vscode}
          />
          <Card
            elevation={4}
            style={{
              width: "50%",

              backgroundColor: "white",
              padding: "10px",
              marginTop: "50px",
            }}
          >
            <Typography variant="h6" style={{ fontFamily: "Moon" }}>
              {" "}
              Visual Studio Code
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                marginTop: "10px",
                fontFamily: "Moon",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              {" "}
              VS Code can be downloaded HERE
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: "10px",
                fontFamily: "Moon",
              }}
            >
              Although there are many different editors out there, I recommend
              VS code for beginners. You can branch out later if you want. I
              recommend it because most guides and tutorials you find out there
              will be using vs code. This makes it easier to follow along, and
              you can use the same extensions/shortcuts that they use.
            </Typography>
          </Card>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            style={{
              marginLeft: "30px",
              marginTop: "50px",
              marginRight: "60px",
              height: "150px",
              width: "150px",
            }}
            image={postman}
          />
          <Card
            elevation={4}
            style={{
              width: "50%",

              backgroundColor: "white",
              padding: "10px",
              marginTop: "50px",
            }}
          >
            <Typography variant="h6" style={{ fontFamily: "Moon" }}>
              {" "}
              Postman
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                marginTop: "10px",
                fontFamily: "Moon",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              {" "}
              Postman can be downloaded HERE
            </Typography>
            <Typography
              variant="body2"
              style={{
                marginTop: "10px",
                fontFamily: "Moon",
              }}
            >
              For an absolute beginner, the idea of API's most likely will sound
              like nonsense. For now, take my word for it.
            </Typography>
          </Card>
        </div>
      </div>
      <div>
        <Card
          style={{
            maxWidth: "200px",
            margin: "0 auto",
            backgroundColor: "#550055",
            marginTop: "100px",
            padding: "10px",
          }}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            {" "}
            Visual Studio Code
          </Typography>
          <ul>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Made by Microsoft
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Free
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Large Community
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Many Helpful Extensions
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Very customizable
              </Typography>
            </li>
          </ul>
        </Card>
        <Card
          style={{
            maxWidth: "200px",
            margin: "0 auto",
            backgroundColor: "#550055",
            marginTop: "100px",
            padding: "10px",
          }}
        >
          <Typography variant="h6" style={{ color: "white" }}>
            {" "}
            Postman
          </Typography>
          <ul>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Easy way to test API's
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Free
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Provides reports on your testing
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body2" style={{ color: "white" }}>
                {" "}
                Clean interface
              </Typography>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Page2;
