import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import avash from "./assets/avash.jpeg";
import rishabh from "./assets/rishabh.jpeg";
import ailiya from "./assets/ailiya.jpeg";
import advait from "./assets/advait.jpeg";
import akshar from "./assets/akshar.jpeg";

export default function AboutTeam() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            className="image-center"
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src="https://www.ischool.berkeley.edu/sites/default/files/styles/fullscreen/public/kay.jpg?itok=YokQtjXN"
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                Advisor: Kay Ashaolu
              </figcaption>
            </figure>
          </Grid>
          <Grid item xs={2}></Grid>

          <Grid
            item
            className="image-center"
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src={ailiya}
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                Product Design and UX Research: Ailiya Duan
              </figcaption>
            </figure>
          </Grid>
          <Grid
            item
            className="image-center"
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src={advait}
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                Product Mgmt and UX Research: Advait Lad
              </figcaption>
            </figure>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid
            item
            className="image-center"
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src={avash}
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                FullStack SWE: Avash Adhikari
              </figcaption>
            </figure>
          </Grid>
          <Grid
            item
            className="image-center"
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src={rishabh}
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                FullStack SWE: Rishabh Thakur
              </figcaption>
            </figure>
          </Grid>
          <Grid
            item
            className="image-center"
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <figure>
              <img
                src={akshar}
                style={{ borderRadius: "50%", width: "200px", height: "250px" }}
              />
              <figcaption style={{ textAlign: "center" }}>
                FullStack SWE: Akshar Dhondiyal
              </figcaption>
            </figure>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
