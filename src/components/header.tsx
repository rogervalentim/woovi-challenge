import Box from "@mui/material/Box";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <Box component={"header"} display={"flex"} justifyContent={"center"}>
      <Box component={"div"} paddingTop={"2.25rem"}>
        <Box
          component={"img"}
          width={"7.72rem"}
          height={"2.29rem"}
          className="logo"
          src={logo}
          alt="logo woovi"
        />
      </Box>
    </Box>
  );
}
