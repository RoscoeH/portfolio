import "typeface-nova-mono"
import "typeface-work-sans"

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  radii: [0, 2, 4, 8, 16, 32, 64, 99999],
  colors: {
    light: "#ffffff",
    dark: "#000000",
    text: "#caffbf",
    background: "#24292E",
    primary: "#ffc6ff",
    secondary: "#9bf6ff",
    muted: "rgba(255, 255, 255, 0.05)",
    spectrum: {
      red: "#ffadad",
      orange: "#ffd6a5",
      yellow: "#fdffb6",
      green: "#caffbf",
      blue: "#9bf6ff",
      darkBlue: "#a0c4ff",
      purple: "#bdb2ff",
      pink: "#ffc6ff",
    },
  },
  fonts: {
    body: '"Work Sans", system-ui, -apple-system, sans-serif',
    heading: '"Nova Mono", sans-serif',
    monospace: "Nova Mono, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    default: "1px solid",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      fontSize: 7,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      mb: 3,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    hr: {
      border: "none",
      py: 2,
    },
  },
  links: {
    heading: {
      color: "primary",
      fontFamily: "heading",
      fontSize: 4,

      "&:hover": {
        textDecoration: "underline",
        color: "secondary",
      },

      "&:active": {
        color: "light",
      },
    },
    button: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: "primary",
      border: "default",
      py: 1,
      px: 2,
      textDecoration: "none",
      borderRadius: 3,

      "& > *": {
        mr: 2,
      },

      "&:hover": {
        color: "secondary",
      },

      "&:active": {
        color: "light",
      },
    },
  },
  cards: {
    primary: {
      bg: "muted",
      p: "3",
      borderRadius: 4,
    },
  },
}

export default theme
