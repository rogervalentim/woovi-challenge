import { Box } from "@mui/material";
import footerImage from "../assets/footer-image.png";

export function Footer() {
  return (
    <Box
      component={"footer"}
      display={"flex"}
      justifyContent={"center"}
      paddingTop={" 2.50rem"}
      paddingBottom={"1.69rem"}
    >
      <Box
        component={"img"}
        width={"16.84rem"}
        height={"1.38rem"}
        src={footerImage}
        alt="image payments woovi"
      />
    </Box>
  );
}
