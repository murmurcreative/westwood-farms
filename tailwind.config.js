module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.njk", "./src/**/*.js", "./src/**/*.scss"],
  theme: {
    screens: {
      xs: "340px",
      sm: "640px",
      md: "768px",
      "mid-tablet": "880px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      calibri: "calibri, sans-serif",
      unna: "'Unna', serif",
    },
    fontSize: {
      h1: "112px",
      xxxl: "82px",
      xxl: "60px",
      xl: "72px",
      "new-h1-mobile": "54px",
      "h1-mobile": "46px",
      h2: "48px",
      h3: "36px",
      h4: "32px",
      h5: "28px",
      lg: "24px",
      md: "22px",
      sm: "20px",
      base: "18px",
      xs: "16px",
      micro: "14px",
    },

    extend: {
      colors: {
        "cloud-burst": "#3B414D",
        orange: "#ECBD65",
        wheat: "#F5DEB2",
        white: "#fff",
      },
      spacing: {
        5: "1.11rem", //20px
        7: "1.75rem",
        9: "2.25rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem", //81px
        22: "5.5rem",
        24: "6rem",
        25: "6.25rem", //112px
        27: "6.75rem",
        29: "7.25rem",
        32: "8rem",
        38: "9.5rem", //171px
        46: "11.5rem", //207px
        50: "12.5rem",
        58: "14.5rem",
        62: "15.5rem",
        80: "20rem",
        82: "20.5rem",
        88: "22rem",
        100: "25rem",

        "1/4": "25%",
        "1/3": "33%",
        "2/5": "40%",
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
        "1/1": "100%",
        "6/5": "120%",
        "3/2": "150%",
      },

      minWidth: {
        38: "9.5rem",
        44: "11rem",
        55: "13.75rem",
        60: "15rem",
        67: "16.75rem",
        102: "25.5rem",
        111: "27.75rem",

        "2/5": "40%",
        "1/2": "50%",
      },

      maxWidth: {
        67: "16.75rem",
        80: "20rem",
        86: "21.5rem",
        93: "23.25rem",
        108: "27rem",
        111: "27.75rem",
        117: "29.25rem",
        119: "29.75rem",
        135: "33.75rem",
        144: "36rem",
        165: "41.25rem",
        168: "42rem",
        171: "42.75rem",
        200: "50rem", //800px
        214: "53.5rem",
        220: "55rem", //880px
        240: "60rem", //960px

        "sm-wrapper": "1097px",
        wrapper: "1200px",
        "lg-wrapper": "1320px",
      },

      minHeight: {
        100: "25rem",
      },

      height: {
        bio: "127px",

        "80screen": "80vh",
        "120screen": "120vh",
      },

      borderWidth: {
        3: "3px",
        6: "6px",
        10: "10px",
      },

      lineHeight: {
        0: "0",
        0.8: ".8",
        0.9: ".9",
        1: "1",
        1.2: "1.2",
        1.3: "1.3",
        1.5: "1.5",
      },

      letterSpacing: {
        none: "0",
        "01": "0.01rem",
        10: "0.1rem",
        15: "0.15rem",
        25: "0.25rem",
      },

      scale: {
        "-100": "-1",
      },

      inset: {
        5: "1.25rem",
        10: "2.5rem",
        13: "3.25rem",
        16: "4rem",
      },

      boxShadow: {
        card: "4px 4px 10px rgba(0,0,0,.1)",
      },
    },
  },
  variants: {},
  plugins: [],
};
