import { redirect } from "next/dist/server/api-utils";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/components/ColorMode.js";
import React from "react"

const theme ={
  light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
  },
  dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
  },
  copa: {
    backgroundBase: "#fae304",
    backgroundLevel1: "#049c34",
    backgroundLevel2: "#c3d7d7",
    borderBase: "#5c73a8",
    textColorBase: "#000000"
  }
}

function ProviderWrapper(props){
  return(
    <ColorModeProvider initialMode={"light"} initialValor = {1}>
        {props.children}
    </ColorModeProvider>
  )
}

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext)
  return (
      <ThemeProvider theme = {theme[contexto.mode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default function _App(props){
  return(
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
}