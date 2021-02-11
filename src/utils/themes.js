import { text, colors, highlight, neutral, red } from "./colors";
import { secondaryFont, primaryFont } from "./typography";

export const defaultTheme = {
//Button
  primaryColor: colors[400],
  secondaryColor: neutral[100],
  tertiaryColor: neutral[600],
  secondaryBorder: colors[400],
  tertiaryBackground: neutral[100],
  textColorOnPrimary: text['light'],
  textColorOnSecondary: text['inverted'],
  textColor: text['dark'],
  textColorInverted: text['light'],
  buttonFont: secondaryFont,
//Button Hover
  hoverBorder: colors[300],
  primaryHover: colors[500],
  secondaryHover: neutral[100],
  textPrimaryHover: text['highlight'],
  textSecondaryHover: text['highlight'],
  textColorInverted: text['light'],
  buttonFont: secondaryFont,
//Button Focus
  focusBorder: highlight['blue'],
  primaryFocus: colors[300],
  secondaryFocus: neutral[100],
  tertiaryFocus: highlight['blue'],
  textPrimaryFocus: text['light'],
  textColorInverted: text['light'],
  buttonFont: secondaryFont,
//Logo
  logoFont: primaryFont,
  primaryLogoTextColor: colors[400],
  primaryLogoBackground: neutral[100],
  primaryLogoBorder: colors[400],
  secondaryLogoTextColor: neutral[600],
  secondaryLogoBackground: neutral[100],
  secondaryLogoBorder: neutral[600],

//Text field
  textFieldFont: secondaryFont,
  textFieldBackground: neutral[200],
  textFieldLabel: neutral[500],
  textFieldInput: highlight['blue'],
  textFieldErrorLabel: red[100],
  textFieldErrorInput: neutral[600],

//Hero
  heroLogoFont: primaryFont,
  heroTextColor: neutral[100],
  heroBorderColor: neutral[100],

//Nav
  navBackground: neutral[100],
};

export const invertedTheme = {
//Button
  primaryColor: colors[400],
  primaryBorder: neutral[100],
  secondaryColor: colors[500],
  secondaryBorder: neutral[100],
  tertiaryColor: neutral[100],
  tertiaryBackground: colors[400],
  textColorOnPrimary: text['light'],
  textColorOnSecondary: text['light'],
  buttonFont: secondaryFont,
//Button Hover
  hoverBorder: colors[300],
  primaryHover: neutral[100],
  secondaryHover: colors[300],
  textPrimaryHover: text['inverted'],
  textSecondaryHover: text['highlight'],
  buttonFont: secondaryFont,
//Button Focus
  focusBorder: highlight['blue'],
  primaryFocus: neutral[100],
  secondaryFocus: colors[300],
  tertiaryFocus: highlight['blue'],
  textPrimaryFocus: text['highlight'],
  textSecondaryFocus: text['light'],
  buttonFont: secondaryFont,

//Logo
  logoFont: primaryFont,
  primaryLogoBackground: colors[400],
  primaryLogoTextColor: neutral[100],
  primaryLogoBorder: neutral[100],

//Text field
  textFieldFont: secondaryFont,
  textFieldBackground: neutral[200],
  textFieldLabel: neutral[100],
  textFieldInput: highlight['blue'],
  textFieldErrorLabel: red[100],
  textFieldErrorInput: neutral[600],

//Nav
  navBackground: colors[400],
}