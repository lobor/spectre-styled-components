var primaryColor = '#5764c6 !default';
var secondaryColor = 'lighten(' + primaryColor + ', 40%) !default';
var linkColor = primaryColor + ' !default';
var darkColor = '#454d5d !default';
var grayColor = 'lighten(' + darkColor + ', 40%) !default';
var borderColor = 'lighten(' + darkColor + ', 60%) !default';
var bgColor = 'lighten(' + darkColor + ', 66%) !default';
var lightColor  = '#fff !default';
var bgColorLight = lightColor + ' !default';
var unitO = '.05rem !default',
    unitH = '.1rem !default',
    unit1 = '.2rem !default',
    unit2 = '.4rem !default',
    unit3 = '.6rem !default',
    unit4 = '.8rem !default',
    unit5 = '1rem !default',
    unit6 = '1.2rem !default',
    unit7 = '1.4rem !default',
    unit8 = '1.6rem !default',
    unit9 = '1.8rem !default',
    unit10 = '2rem !default',
    unit12 = '2.4rem !default',
    unit16 = '3.2rem !default',
    lineHeight = '1rem !default',
    borderWidth = unitO + ' !default',
    baseFontFamily = 'AppleSystem, systemUi, BlinkMacSystemFont, "Segoe UI", Roboto !default';

var theme = {
  // Core variables
  // Colors
  // Core colors
  primaryColor: primaryColor,
  primaryColorDark: 'darken(' + primaryColor + ', 3%) !default',
  primaryColorLight: 'lighten(' + primaryColor + ', 3%) !default',
  secondaryColor: secondaryColor,
  secondaryColorDark: 'darken(' + secondaryColor + ', 3%) !default',
  secondaryColorLight: 'lighten(' + secondaryColor + ', 3%) !default',

  linkColor: linkColor,
  linkColorDark: 'darken(' + linkColor + ', 5%) !default',

  // Gray colors
  darkColor: darkColor,
  lightColor: lightColor,
  grayColor: 'lighten(' + darkColor + ', 40%) !default',
  grayColorDark: 'darken(' + grayColor + ', 20%) !default',
  grayColorLight: 'lighten(' + grayColor + ', 20%) !default',

  borderColor: 'lighten(' + darkColor + ', 60%) !default',
  borderColorDark: 'darken(' + borderColor + ', 10%) !default',
  bgColor: 'lighten(' + darkColor + ', 66%) !default',
  bgColorDark: 'darken(' + bgColor + ', 3%) !default',
  bgColorLight: lightColor + ' !default',

  // Control colors
  successColor: '#32b643 !default',
  warningColor: '#ffb700 !default',
  errorColor: '#e85600 !default',

  // Other colors
  codeColor: '#e06870 !default',
  highlightColor: '#ffe9b3 !default',
  bodyBg: bgColorLight + ' !default',
  bodyFontColor: 'lighten(' + darkColor + ', 5%) !default',

  // Fonts
  // Credit: 'https://www.smashingmagazine.com/2015/11/usingSystemUiFontsPracticalGuide/
  baseFontFamily: 'AppleSystem, systemUi, BlinkMacSystemFont, "Segoe UI", Roboto !default',
  monoFontFamily: '"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace !default',
  fallbackFontFamily: '"Helvetica Neue", sansSerif !default',
  cjkZhFontFamily: baseFontFamily + ', "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", fallbackFontFamily !default',
  cjkJpFontFamily: baseFontFamily + ', "Hiragino Sans", "Hiragino Kaku Gothic Pro", "Yu Gothic", YuGothic, Meiryo, fallbackFontFamily !default',
  cjkKoFontFamily: baseFontFamily + ', "Malgun Gothic", fallbackFontFamily !default',
  bodyFontFamily: baseFontFamily + ', fallbackFontFamily !default',

  // Unit sizes
  unitO: '.05rem !default',
  unitH: '.1rem !default',
  unit1: '.2rem !default',
  unit2: '.4rem !default',
  unit3: '.6rem !default',
  unit4: '.8rem !default',
  unit5: '1rem !default',
  unit6: '1.2rem !default',
  unit7: '1.4rem !default',
  unit8: '1.6rem !default',
  unit9: '1.8rem !default',
  unit10: '2rem !default',
  unit12: '2.4rem !default',
  unit16: '3.2rem !default',

  // Font sizes
  htmlFontSize: '20px !default',
  htmlLineHeight: '1.428571429 !default',
  fontSize: '.7rem !default',
  fontSizeSm: '.6rem !default',
  fontSizeLg: '.8rem !default',
  lineHeight: lineHeight,

  // Sizes
  layoutSpacing: unit2 + ' !default',
  layoutSpacingSm: unit1 + ' !default',
  layoutSpacingLg: unit4 + ' !default',
  borderRadius: unitH + ' !default',
  borderWidth: borderWidth,
  borderWidthLg: unitH + ' !default',
  controlSize: unit8 +' !default',
  controlSizeSm: unit6 + ' !default',
  controlSizeLg: unit10 + ' !default',
  controlPaddingH: unit2 + ' !default',
  controlPaddingV: '(' + controlSize + ' - ' + lineHeight + ') / 2 - ' + borderWidth + ' !default',
  controlPaddingVSm: '(' + controlSizeSm + ' - ' + lineHeight + ') / 2 - ' + borderWidth + ' !default',
  controlPaddingVLg: '(' + controlSizeLg + ' - ' + lineHeight + ') / 2 - ' + borderWidth + ' !default',
  controlIconSize: '.7rem !default',
  controlMinWidth: '180px !default',
  controlMaxWidth: '320px !default',

  // Responsive breakpoints
  sizeXs: '480px !default',
  sizeSm: '600px !default',
  sizeMd: '840px !default',
  sizeLg: '960px !default',
  sizeXl: '1280px !default',
  size2x: '1440px !default',

  // ZIndex
  zindex0: '1 !default',
  zindex1: '100 !default',
  zindex2: '200 !default',
  zindex3: '300 !default',
  zindex4: '400 !default',

  };
