const ptSans = {
  regular: {
    fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `
      url('./fonts/pt-sans-v12-latin-regular.woff2') format('woff2'),
      url('./fonts/pt-sans-v12-latin-regular.woff') format('woff');
    `,
  },
  fw700: {
    fontFamily: 'PT Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    src: `
      url('./fonts/pt-sans-v12-latin-700.woff2') format('woff2'),
      url('./fonts/pt-sans-v12-latin-700.woff') format('woff');
    `,
  },
};

export default ptSans;
