const defaultTheme = {
  colors: {
    purple: "#6c5ce7",
    pink: "#F73D93",
    deepBlue: "#16003B",
    green: "#17EB40",
    grey: "#413F42",
  },
  typography: {
    fontSize: {
        1: '0.4rem',
        2: '0.6rem',
        3: '0.8rem',
        4: '1rem',
        5: '1.2rem',
        6: '1.4rem',
        7: '1.6rem',
        8: '1.8rem',
        9: '2rem',
        10: '2.2rem',
        11: '2.4rem',
        12: '2.6rem',
        13: '2.8rem',
        14: '3rem',
        15: '3.2rem',
        16: '3.4rem',
        17: '3.6rem',
        18: '3.8rem',
        19: '4rem',
    }
  },border:{
    radius: {
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        7: '14px',
        8: '16px',
        9: '18px',
        10: '20px',
        pill: '100px',
        round: '50%',
    } ,
    width: {
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        7: '14px',
        8: '16px',
        9: '18px',
        10: '20px'
    },
    
  },  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    unit: "px",
    up: (key) =>
      `@media (min-width:${defaultTheme.breakpoints.values[key]}${defaultTheme.breakpoints.unit})`,
    down: (key) =>
      `@media (max-width:${defaultTheme.breakpoints.values[key]}${defaultTheme.breakpoints.unit})`,
    between: (start, end) =>
      `@media (min-width:${defaultTheme.breakpoints.values[start]}${defaultTheme.breakpoints.unit}) and (max-width:${defaultTheme.breakpoints.values[end]}${defaultTheme.breakpoints.unit})`,
  },
};

export default defaultTheme;
