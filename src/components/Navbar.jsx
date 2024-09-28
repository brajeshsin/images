// import { Box, Button, Stack, TextField } from "@mui/material";
// import React from "react";
// import PixabayContext from "../context/PixabayContext";
// import { useContext } from "react";

// const Navbar = () => {
//   const { fetchImageByCategory, setQuery } = useContext(PixabayContext);
//   return (
//     <>
//       <Box
//         sx={{
//           my: 5,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Stack
//           direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens
//           spacing={1} // Space between buttons
//         >
//           <Button
//             onClick={() => fetchImageByCategory("nature")}
//             variant="contained"
//             sx={{
//               mx: 1,
//               minWidth: { xs: "100%", sm: "auto" },
//               bgcolor: "green",
//             }}
//           >
//             Nature
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("science")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Science
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("computer")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Computer
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("buildings")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Buildings
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("food")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Food
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("sports")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Sports
//           </Button>
//           <Button
//             onClick={() => fetchImageByCategory("travel")}
//             variant="contained"
//             sx={{ mx: 1, minWidth: { xs: "100%", sm: "auto" } }}
//           >
//             Travel
//           </Button>
//         </Stack>
//       </Box>
//       <Box
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
//       >
//         <TextField
//           onChange={(e) => setQuery(e.target.value)}
//           type="text"
//           color="secondary"
//           variant="outlined"
//           placeholder="Search..."
//           size="small" // Change this to "small" to reduce height
//           sx={{
//             bgcolor: "gray",
//             height: "40px", // Set a custom height
//             "& .MuiOutlinedInput-root": {
//               "& input": {
//                 padding: "10px 14px", // Adjust padding for smaller height
//               },
//             },
//           }}
//         />
//       </Box>
//     </>
//   );
// };

// export default Navbar;

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PixabayContext from "../context/PixabayContext";
import { useContext } from "react";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          my: 4,
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" color="#00FFFF">
          {" "}
          Welcome to, ImageHaven
        </Typography>
        <Typography variant="h4" color="#008080" mt={2}>
          Made By :- Brajesh Singh
        </Typography>
      </Box>
      <Box
        sx={{
          my: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }} // Stack vertically on small screens
          spacing={1} // Space between buttons
        >
          <Button
            onClick={() => fetchImageByCategory("nature")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "green", // Nature color
            }}
          >
            Nature
          </Button>
          <Button
            onClick={() => fetchImageByCategory("science")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "blue", // Science color
            }}
          >
            Science
          </Button>
          <Button
            onClick={() => fetchImageByCategory("computer")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "orange", // Computer color
            }}
          >
            Computer
          </Button>
          <Button
            onClick={() => fetchImageByCategory("buildings")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "gray", // Buildings color
            }}
          >
            Buildings
          </Button>
          <Button
            onClick={() => fetchImageByCategory("food")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "tomato", // Food color
            }}
          >
            Food
          </Button>
          <Button
            onClick={() => fetchImageByCategory("sports")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "blueviolet", // Sports color
            }}
          >
            Sports
          </Button>
          <Button
            onClick={() => fetchImageByCategory("travel")}
            variant="contained"
            sx={{
              mx: 1,
              minWidth: { xs: "100%", sm: "auto" },
              bgcolor: "skyblue", // Travel color
            }}
          >
            Travel
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          variant="outlined"
          placeholder="Search by category"
          size="small"
          sx={{
            borderRadius: "25px",
            width: "400px",
            bgcolor: "gray",
            height: "40px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none", // Remove the border
              },
              "& input": {
                padding: "10px 14px",
              },
            },
          }}
        />
      </Box>
    </>
  );
};

export default Navbar;
