// import React, { useContext } from "react";
// import PixabayContext from "../context/PixabayContext";
// import { Box, Container, Skeleton } from "@mui/material";

// const Images = () => {
//   const { imageData, isLoading } = useContext(PixabayContext);

//   return (
//     <Container>
//       <Box
//         sx={{
//           my: 5,
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "repeat(2, 1fr)",
//             sm: "repeat(3, 1fr)",
//             md: "repeat(4, 1fr)",
//           },
//           gap: 3,
//           justifyItems: "center",
//           alignItems: "center",
//           padding: 2,
//           overflow: "hidden", // Hide overflow
//           "&::-webkit-scrollbar": {
//             display: "none", // For Chrome, Safari, and Opera
//           },
//           "&::-moz-scrollbar": {
//             display: "none", // For Firefox
//           },
//           scrollbarWidth: "none", // For Firefox
//         }}
//       >
//         {imageData.map((image) => (
//           <Box key={image.id} sx={{ maxWidth: "100%" }}>
//             <Box
//               component="img"
//               src={image.largeImageURL}
//               alt={image.tags}
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: 1,
//                 border: "2px solid blue",
//                 transition: "transform 0.5s ease",
//                 "&:hover": {
//                   transform: "scale(1.1)",
//                   border: "2px solid orange",
//                 },
//               }}
//             />
//           </Box>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default Images;

import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import { RiEmotionSadLine } from "react-icons/ri";

const Images = () => {
  const { imageData, isLoading } = useContext(PixabayContext);

  return (
    <Container>
      <Box
        sx={{
          my: 5,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          justifyItems: "center",
          alignItems: "center",
          padding: 2,
          overflow: "hidden",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&::-moz-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {isLoading ? (
          // Show skeletons while loading
          Array.from(new Array(8)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width="100%"
              height={200}
            />
          ))
        ) : imageData.length > 0 ? (
          imageData.map((image) => (
            <Box key={image.id} sx={{ maxWidth: "100%" }}>
              <Box
                component="img"
                src={image.largeImageURL}
                alt={image.tags}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  border: "2px solid blue",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid orange",
                  },
                }}
              />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center", my: 40 }}>
              No data found
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Images;
