module.exports = {
  content: ["./index.html", "./docs/.vitepress/**/*.{vue,js,ts,jsx,tsx,md}", "./index.md"],
  theme: {
    extend: {
      inset: {
        70: "70px",
        240: "240px",
      },
      padding: {
        5: "5px",
        10: "10px",
        14: "14px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        70: "70px",
        280: "280px",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        36: "36px",
        42: "42px",
        52: "52px",
        72: "72px",
      },
      height: {
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        55: "55px",
        60: "60px",
        70: "70px",
      },
      margin: {
        10: "10px",
        20: "20px",
        24: "24px",
        30: "30px",
        32: "32px",
        50: "50px",
        80: "80px",
      },
      maxWidth: {
        1376: "1376px",
      },
      width: {
        5: "5px",
        10: "10px",
        16: "16px",
        20: "20px",
        30: "30px",
        40: "40px",
        140: "140px",
        240: "240px",
        600: "600px",
      },
      lineHeight: {
        30: "30px",
        40: "40px",
      },
      translate: {
        70: "70px",
        240: "240px",
      },
      colors: {},
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      zIndex: {
        90: "90",
        100: "100",
      },
      backgroundImage: () => ({
        arrow: "url('/images/arrow.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
