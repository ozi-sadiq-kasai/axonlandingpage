import { ThemeProvider } from "styled-components";

const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

const theme = {
  device: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
    desktopLarge: `(min-width: ${size.desktop})`,
  },
};

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
