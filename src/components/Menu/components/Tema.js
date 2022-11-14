import React from "react";
import styled from "styled-components"
import ColorModeProvider from "./ColorMode.js";
import { ColorModeContext } from "./ColorMode.js";

const StyledTema= styled.div`
    width: 80px;
    height: 40px;
    align-items: center;

    button{
        width:100%;
        height: 100%;
    }
`;

export default function Tema() {
    const contexto = React.useContext(ColorModeContext)
    const escrito = ['☀️', '🌙', '⚽'];
    return (
        <StyledTema>
            <button onClick={() =>
                {
                    if (contexto.mode == "light"){
                        contexto.setValor(2)
                        return contexto.setMode("dark")
                    }else if(contexto.mode == "dark"){ 
                        contexto.setValor(0)
                        return contexto.setMode("copa")
                    }else{
                        contexto.setValor(1)
                        return contexto.setMode("light")
                    }
                }}>
                {escrito[contexto.valor]}
            </button>
        </StyledTema>
    )
}