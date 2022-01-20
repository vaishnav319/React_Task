import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
const Display = ({ photo }) => {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", margin: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={photo.thumbnailUrl}
        alt="thumbnail"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "" }}>
          <Typography component="div" variant="h5">
            {photo.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="a">
            <Link href={photo.url} color="inherit">
              {photo.url}
            </Link>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Display;
