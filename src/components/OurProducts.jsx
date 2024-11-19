// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom"; 

// const productsData = [
//   {
//     title: "Digiquest Consultancy Services pvt. ltd.",
//     description:
//       "A complete solution for health monitoring with appointment booking and online consultaion facilities.",
//     imageUrl: "https://via.placeholder.com/300x200",
//     link: "https://dcs.org.in/",
//   },
//   {
//     title: "Temperature Convertor",
//     description:
//       "A temperature convertor that is able to convert varoius temperature forms to others.",
//     imageUrl: "https://via.placeholder.com/300x200",
//     link: "https://mayankyadav7518.github.io/tempconverter/",
//   },
  
// ];

// const Products = () => {
//   return (
//     <Box sx={{ padding: 6, backgroundColor: "#fff", paddingTop:'100px' }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "#343a40", marginBottom: "18px" }}
//       >
//         Our Products
//       </Typography>
//       <Typography
//         variant="body1"
//         align="center"
//         sx={{
//           color: "#6c757d",
//           marginBottom: "40px",
//           maxWidth: "600px",
//           margin: "0 auto",
//           paddingBottom: '30px' 
//         }}
//       >
//         Explore the innovative solutions we have created for healthcare and
//         beyond:
//       </Typography>

//       <Grid container spacing={4} justifyContent="left">
//         {productsData.map((product, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 height: "100%",
//                 borderRadius: "16px",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={product.imageUrl}
//                 alt={product.title}
//                 sx={{
//                   height: "200px",
//                   width: "100%",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "16px",
//                   borderTopRightRadius: "16px",
//                 }}
//               />
//               <CardContent sx={{ padding: "20px" }}>
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   sx={{ fontWeight: "bold", color: "#343a40" }}
//                 >
//                   {product.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ marginY: 2 }}
//                 >
//                   {product.description}
//                 </Typography>

//                 <Link  to={product.link} target="_blank" style={{ textDecoration: "none" }}>
//                   <Button
//                      variant="outlined"
//                      sx={{
//                        color: "#0072ff",
//                        borderColor: "#0072ff",
//                        "&:hover": { borderColor: "#0059b3", color: "#0059b3" },
//                      }}
//                   >
//                     Visit Our Product
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Products;



import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom"; 

const productsData = [
  {
    title: "Digiquest Consultancy Services pvt. ltd.",
    description:
      "A complete solution for health monitoring with appointment booking and online consultation facilities.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://dcs.org.in/",
  },
  {
    title: "Temperature Converter",
    description:
      "A temperature converter that allows you to convert various temperature forms.",
    imageUrl: "https://via.placeholder.com/300x200",
    link: "https://mayankyadav7518.github.io/tempconverter/",
  },
];

const Products = () => {
  return (
    <Box
      sx={{
        padding: 6,
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#343a40",
          marginBottom: "18px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Our Products
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: "#6c757d",
          marginBottom: "40px",
          maxWidth: "700px",
          margin: "0 auto",
          paddingBottom: "30px",
          fontSize: "1.1rem",
        }}
      >
        Explore our innovative solutions, designed to revolutionize Digital Solutions and
        simplify your everyday needs:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {productsData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.title}
                sx={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <CardContent sx={{ padding: "20px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", color: "#343a40", fontSize: "1.2rem" }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: 2, fontSize: "0.95rem" }}
                >
                  {product.description}
                </Typography>

                <Link to={product.link} target="_blank" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#0072ff",
                      borderColor: "#0072ff",
                      "&:hover": { borderColor: "#0059b3", color: "#0059b3" },
                      borderRadius: "8px",
                      padding: "8px 16px",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    Visit Our Product
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
