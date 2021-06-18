import "typeface-nova-mono"
import "typeface-work-sans"

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512, 640, 720, 960],
  radii: [0, 2, 4, 8, 16, 32, 64, 99999],
  breakpoints: ["16em", "24em", "32em", "40em", "48em", "64em"],
  colors: {
    light: "#ffffff",
    dark: "#000000",
    text: "#caffbf",
    background: "#24292e",
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
      textDecoration: "none",
      boxShadow: t => `inset 0 -1px 0 ${t.colors.primary}`,
    },
    hr: {
      border: "none",
      py: 3,
    },
  },
  text: {
    small: {
      fontSize: 1,
    },
  },
  buttons: {
    primary: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      bg: "transparent",
      color: "primary",
      border: "default",
      py: 1,
      px: 2,
      textDecoration: "none",
      borderRadius: 3,
      "&:hover": {
        color: "secondary",
      },
      "&:active": {
        color: "light",
      },
      "&:disabled": {
        color: "spectrum.orange",
      },
      "& > *": {
        mr: 1,
      },
    },
  },
  links: {
    heading: {
      color: "primary",
      fontFamily: "heading",
      fontSize: 4,
      textDecoration: "none",
      boxShadow: t => `inset 0 -2px 0 ${t.colors.primary}`,
      "&:hover": {
        color: "secondary",
        boxShadow: t => `inset 0 -2px 0 ${t.colors.secondary}`,
      },
      "&:active": {
        color: "light",
        boxShadow: t => `inset 0 -2px 0 ${t.colors.light}`,
      },
    },
    title: {
      color: "primary",
      fontFamily: "heading",
      fontSize: 3,
      textDecoration: "none",
      "&:hover": {
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
      "&:hover": {
        color: "secondary",
      },
      "&:active": {
        color: "light",
      },
      "& > *": {
        mr: 1,
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
  forms: {
    input: {
      outline: "none",
      bg: "muted",
      border: "none",
      borderRadius: 3,
      mb: 2,
      "&:hover": {
        boxShadow: t => `inset 0 0 0 1px ${t.colors.secondary}`,
      },
      "&:focus": {
        boxShadow: t => `inset 0 0 0 1px ${t.colors.light}`,
      },
    },
    textarea: {
      fontFamily: "body",
      outline: "none",
      bg: "muted",
      border: "none",
      borderRadius: 3,
      mb: 2,
      "&:hover": {
        boxShadow: t => `inset 0 0 0 1px ${t.colors.secondary}`,
      },
      "&:focus": {
        boxShadow: t => `inset 0 0 0 1px ${t.colors.light}`,
      },
    },
  },
}

export default theme
