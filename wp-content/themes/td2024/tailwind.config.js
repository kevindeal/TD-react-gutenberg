/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,php}'],
  theme: {
    fontSize: {
      xs: '12px', /* 12px Body XS */
      sm: '14px', /* 14px Body S */
      base: '16px', /* 16px Body M */
      l: '20px', /* 20px Desktop H6 & Body L */
      xl: '24px', /* 24px Desktop Body XL Or H5 */
      '2xl': '24px', /* 24px Desktop H5 */
      '3xl': '28px', /* 28px Desktop H4 */
      '4xl': '35px', /* 35px Desktop H3 */
      '5xl': '50px', /* 50px Desktop H2 */
      '6xl': '70px', /* 70px Desktop H1 - changed from 85 5/15*/
      'mobile-xs': '10px', /* 10px Mobile Body XS */
      'mobile-sm': '12px', /* 12px Mobile Body S */
      'mobile-base': '12px', /* 12px Mobile Body M */
      'mobile-l': '14px', /* 14px Mobile Body l */
      'mobile-xl': '16px', /* 16px Mobile H6 or Body Xl */
      'mobile-2xl': '16px', /* 16px Mobile H5 */
      'mobile-3xl': '20px', /* 20px Mobile H4 */
      'mobile-4xl': '22px', /* 22px Mobile H3 */
      'mobile-5xl': '30px', /* 30px Mobile H2 */
      'mobile-6xl': '55px', /* 55px Mobile H1*/
      'eyebrow': '22px', /* 22px Desktop Eyebrow */
      'secondary-header':'58px', /* 58px Desktop Secondary Header Size on Hero */
      'long-quote' : '35px', /* 35px Desktop Long Form Pull-Quote */
      'quote' : '50px', /* 50px Desktop Quote Module */
      'stat' : '85px', /* 85px Desktop Statistic Callout */
      'button': '18px', /* 18px Desktop Button Text */
      'secondary-button': '20px', /* 20px Desktop Secondary Button Text */
      'mobile-eyebrow': '16px', /* 16px Mobile Eyebrow */
      'mobile-long-quote' : '22px', /* 22px Mobile Long Form Pull-Quote */
      'mobile-quote' : '23px', /* 23px Mobile Quote Module */
      'mobile-stat' : '55px', /* 55px Mobile Statistic Callout */
      'mobile-secondary-header':'28px', /* 28px Mobile Secondary Header Size on Hero */
      'mobile-button': '14px', /* 14px Mobile Button Text  */
      'mobile-secondary-button': '14px', /* 14px Mobile Secondary Button Text  */
      'mobile-logo-banner-heading': '16px', /* 1rem Logo Banner Heading Text  */
      'logo-banner-heading': '22px', /* 2rem Mobile Logo Banner Heading Text  */
      'case-study-heading': '50px', /* 50px Case Study Heading Text  */
      'mobile-case-study-heading': '25px', /* 25px Mobile Case Study Heading Text  */
    },
    fontFamily: {
      'display': '"Inter", sans-serif',
      'header' : '"ABC Arizona Flare Light", serif',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    borderRadius: {
      DEFAULT: '1rem',
      'hero': '60px',
      'mobile-hero': '30px'
    },
    extend: {
      colors: {
        navy: {
          100: '#131023',
        },
        blue: {
          100: '#3A61FF',
        },
        gray: {
          50: '#DBDBDC',
          100: '#F4F5F7',
          200: '#616161',
          250: '#6e6e6e'
        },
        primaryBlue: {
          25: '#C4C3C8',
          50: '#898790',
          75: '#4D4B59',
          100: '#141024',
        },
        secondaryBlue: {
          25: '#C7D4F3',
          50: '#91ABE8',
          75: '#5A81DD',
          100: '#1A57DB',
        },
        accentLavender: {
          25: '#E6DEFB',
          50: '#CDBEF8',
          75: '#B49EF6',
          100: '#A37AFC',
        },
        accentDarkPurple: {
          25: '#C6C5D9',
          50: '#8F8BB4',
          75: '#58528F',
          100: '#231670',
        },
        accentRed: {
          25: '#F8D2CD',
          50: '#F2A69D',
          75: '#EE7C6D',
          100: '#FF4635',
        },
        accentMaroon: {
          25: '#D5C0CD',
          50: '#AB829B',
          75: '#83446A',
          100: '#68003B',
        },
        accentGreen: {
          25: '#E9F1D0',
          50: '#D4E3A4',
          75: '#BFD779',
          100: '#A1CD3A',
        },
        accentTurquoise: {
          25: '#DDFCFB',
          50: '#BDF9F8',
          75: '#A0F6F6',
          100: '#5AF8F5',
        },
        primaryBlack : {
          25: '#C6C8CA',
          50: '#939597',
          75: '#626366',
          100: '#000000',
        },
        eyebrow: {
          'dark': '#89F5F4',
        }
      },
      border: {
        1: '1px',
      },
      gradients: {
        cardGradient: {
          start: 'rgba(58, 97, 255, 0.50)',
          end: 'rgba(43, 86, 211, 0.05)'
        },
      },
      spacing: {
        'hero-vertical': '86px',
        'sm-vertical' : '60px',
        'sm-horizontal': '20px',
        'md-vertical': '80px',
        'md-horizontal': '40px',
        'lg-vertical': '80px',
        'lg-vertical-cta': '100px',
        'lg-horizontal': '60px',
        'xl-vertical': '100px',
        'xl-vertical-cta': '150px',
        'xl-horizontal': '110px',
        'sm-vertical-hero-top': '150px',
        'md-vertical-hero-top': '170px',
        'lg-vertical-hero-top': '170px',
        'xl-vertical-hero-top': '190px',
      },
      backgroundImage: {
        'cardGradient1': 'linear-gradient(180deg, rgba(58, 97, 255, 0.50) 0%, rgba(43, 86, 211, 0.05) 100%)',
        'cardGradient2': 'linear-gradient(180deg, rgba(58, 97, 255, 0.25) 0%, rgba(43, 86, 211, 0.03) 100%)',
        'transparencyGradient': 'linear-gradient(180deg, rgba(43, 86, 211, 0.47) 50%, rgba(58, 97, 255, 0.75) 100%)',
        'buttonGradientFill': 'linear-gradient(98deg, #131023 6.85%, #252D6E 100.36%)',
        'colorGradient1': 'linear-gradient(98deg, #131023 29.61%, #2B56D3 106.95%)',
        'darkVertical': 'linear-gradient(180deg, #3A61FF 0%, #131023 100%)',
        'blueTurquoiseVertical': 'linear-gradient(180deg, #3A61FF 0%, #89F5F4 100%)',
        'lightBlueVertical': 'linear-gradient(180deg, #89F5F4 0%, #FFF 100%)',
        'lavenderVertical': 'linear-gradient(180deg, #3A61FF 0%, #FFF 100%)',
        'buttonGradientStroke': 'linear-gradient(180deg, #3A61FF 0%, #FFF 47.5%, #3A61FF 96%)',
        'heroGradient': 'linear-gradient(270deg, #2B56D31A 10%, #3A61FF 100%)',
        'heroGradient-sm': 'linear-gradient(-135deg, #2B56D31A -50%, #3A61FF 100%)',
        'formGradient': 'linear-gradient(180deg, #131023 0%, rgba(19, 16, 35, 0.00) 100%)',
        'formGradientDark': 'linear-gradient(180deg, #3A61FF 22.5%, rgba(43, 86, 211, 0.00) 100%)',
        'caseStudy': `linear-gradient(180deg, rgba(58, 97, 255, 0.53) 5.75%, #3A61FF 68.81%)`,
        'videoOverlay' : 'linear-gradient(180deg, rgba(43, 86, 211, 0.00) 40.28%, #3A61FF 88.35%)',
        'blueLightBlueHorizontal': 'linear-gradient(81deg, #3A61FF 63%, rgba(90, 248, 245, 0.36) 112.65%);',
        'blueLightBlueHorizontal-sm': 'linear-gradient(305deg, #99DDF7 -2.55%, rgba(63, 122, 253, 0.89) 36.13%, #3A61FF 74.8%);'
        
      },
      flex: {
        '2' : '2',
        '3' : '3',
      },
      lineHeight: {
        'eyebrow': '145%',
        'hero-body': '145%',
        'h1': '1.25',
        'h1-mobile': '1.1',
        'header':'1.2',
        'subheader': '1.3',
        'card-header': '140%',
      },
      objectPosition: {
        'center-top' : 'center 0',
        'center-bottom' : 'center 100%',
        'center-center' : 'center center',
        'left-top' : '0 0',
        'left-bottom' : '0 100%',
        'left-center' : '0 center',
        'right-top' : '100% 0',
        'right-bottom' : '100% 100%',
        'right-center' : '100% center',
        'lg-center-top' : 'center 0',
        'lg-center-bottom' : 'center 70%',
        'lg-center-center' : 'center center',
        'lg-left-top' : '0 0',
        'lg-left-bottom' : '0 70%',
        'lg-left-center' : '0 center',
        'lg-right-top' : '70% 0',
        'lg-right-bottom' : '70% 70%',
        'lg-right-center' : '70% center'
      },
      width: {
        '215': '215px'
      },
      maxHeight: {
        "icon-sm": "40px",
        "icon-default": "80px"
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      const buttons = {
        '.btn-primary': {
          padding: '15.5px 30px',
          borderRadius: '75px',
          fontWeight: '500',
          fontSize: '18px',
          fontFamily: 'Inter',
          border: '1px solid #3A61FF',
          lineHeight: 'normal',
          position: 'relative',
          textAlign: 'center',
          width: 'fit-content'
        },
        '.btn-primary-clear': {
          padding: '15.5px 30px',
          borderRadius: '75px',
          fontWeight: '500',
          fontSize: '18px',
          fontFamily: 'Inter',
          lineHeight: 'normal',
          position: 'relative',
          textAlign: 'center'
        },
        '.small': {
          padding: '9px 20px',
          fontSize: '14px',
        },
        '.outline': {
          background: 'transparent',
          color: '#131023',
          border: '1px solid #131023',
        },
        '.dark': {
          background: 'transparent',
          color: '#FFF',
          border: '1px solid #FFF',
        },
        '.btn-secondary': {
          padding: '10px 0',
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: '500',
          position: 'relative',
        },
        '.btn-secondary.small': {
          padding: '10px 0',
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: '500',
          position: 'relative',
        },
        '.btn-secondary.dark': {
          border: 'none',
        }
      }
      addComponents(buttons)
    }
  ],
}

