import Grid from "@mui/material/Grid"; // Grid version 1
import { Box } from "@mui/material";
import logoPhone from "./logo-phone.png";

export default function AboutMusicMate() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "5px" }}>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid xs={4}>
            <img src={logoPhone} width="480" height="600" />
          </Grid>
          <Grid xs={8} sx={{ marginTop: "-200px" }}>
            <h1>MusicMate</h1>
            Despite coming from different backgrounds, all of us share one
            common belief — if put to use the right way, technology can be a
            social enabler. With this capstone project, our aim is to combine
            our love for music and technology to represent an underserved
            population of aspiring and/or established music artists to network
            and make valuable connections that can help them with the following:
            <ol>
              <li>Enhanced visibility via smarter artist(s)/music discovery</li>
              <li>Potential gig searching and matching</li>
              <li>Teaming up with fellow music enthusiasts to form groups</li>
            </ol>
            Introducing … (drum roll)... <strong>MusicMate</strong>
            <br />
            <br />
            MusicMate is a platform that enables music enthusiasts to find other
            music artists to play music with, without having to depend on word
            of mouth or recommendation algorithms of the social networking
            websites. Using MusicMate, artists can add filters to their search
            and get a tailored list of people that fit the criteria that they
            are looking for.
            <br />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
