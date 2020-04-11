module.exports = {
  theme: {
    extend: {
      screens: {
        xxl: "1450px",
        xxxl: "1650px"
      },
      colors: {
        "theme-red": "#c0392b",
        "theme-red-dark": "#d9c10c",
        "theme-orange": "#e67e22"
      },
      backgroundColor: theme => ({
        "theme-orange": "#e67e22",
        "theme-red": "#c0392b"
      }),
      spacing: {
        '20rem': '20rem',
        '22rem': '22rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '32rem': '32rem',
        '34rem': '34rem',
        '35rem': '35rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '18rem': '18rem',
        '24rem': '24rem',
        '26rem': '26rem',
        'screen-80': '80vh',
      },
      opacity: {
        '85': '.85',
        '95': '.95',
        '98': '.98',
      },
      inset : {
        '-1': '-1rem',
        '-2': '-2rem',
        '-3': '-3rem',
        '-4': '-4rem',
        '-5': '-5rem',
        '-6': '-6rem',
        '-7': '-7rem',
        '-16': '-16rem',
        '-32': '-32rem',
      }
    }
  },
  variants: {},
  plugins: [],
}
