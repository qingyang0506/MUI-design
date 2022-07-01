import { createTheme } from "@mui/system";

 const theme = createTheme({
    palette: {
        primary: {
            main: "red",
            light:"skyblue"
        },
        secondary: {
            main: "#15c630",    
        },
        otherColor:{
            main:"#999"
        }
    }
});

export default theme;