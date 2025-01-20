import { ThemeProvider } from "styled-components";

const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
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
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }