const theme = {
  colors: {
    primary: '#0070f3'
  },
  fonts: {
    displayFont: `Nunito, Lato, "Lucida Grande", Tahoma, sans-serif`,
    textFont: `Jaldi, 'Helvetica Neue', Helvetica, Arial, sans-serif`
  },
  imports: {
    displayFont: `@font-face {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-display: auto;
      src: local('Nunito Regular'), local('Nunito-Regular'), url('https://fonts.gstatic.com/s/nunito/v11/XRXV3I6Li01BKofINeaBTMnFcQ.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-display: auto;
      src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v11/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2) format('woff2');
    }
  `,
    textFont: `@font-face {
      font-family: 'Jaldi';
      font-style: normal;
      font-weight: 400;
      font-display: auto;
      src: local('Jaldi'), local('Jaldi-Regular'), url('https://fonts.gstatic.com/s/jaldi/v6/or3sQ67z0_CI33NTbJHdBLg9.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Jaldi';
      font-style: normal;
      font-weight: 700;
      font-display: auto;
      src: local('Jaldi Bold'), local('Jaldi-Bold'), url(https://fonts.gstatic.com/s/jaldi/v6/or3hQ67z0_CI33voSYTwJrUXnTPm.woff2) format('woff2');
    }
  `
  },
  navHeight: 82
}

export default theme
