import React from "react"

export const ColorModeContext = React.createContext({
    mode: "light",
    setMode: () => {}
});

export const ValorModeContext = React.createContext({
    valor: 0,
    setValor: () => {}
})

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)
    const [valor, setValor] = React.useState(props.intialValor)
    return(
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, valor: valor, setValor: setValor}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}