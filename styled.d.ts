import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };
    sizes: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
  }
}
