import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";
import React from "react"

function HomePage() {
    const [valorDaBusca, setValorDaBusca] = React.useState("")
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
            <Menu valorDaBusca = {valorDaBusca} setValorDaBusca = {setValorDaBusca}/>
            <Header />
            <TimeLine valorDoFiltro = {valorDaBusca} playlists={config.playlists}/>
            <Footer favoritos={config.favoritos} />
        </div>
        </>        
    )
  }
  
const StyledHeader = styled.div`
    flex: 1;
    width: 100%;
    height: auto;
    padding: 16px;
    overflow: hidden;
    .logo{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    },
    section{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        overflow: hidden;
    }
    .banner{
        width: 100%;
        weight: 200px;
    }
`;

function Header(){
    return(
        <StyledHeader>
            <div>
                <img src={`${config.banner}`} class = 'banner'/>
            </div>
            <div>
                <section className='user-info'>
                    <section>
                        <img src={`${config.logo}`} class = 'logo' />
                        <div>
                            <h2>{config.nome}</h2> 
                            <p>{config.cargo}</p>   
                        </div>
                    </section>
                </section>
            </div>
        </StyledHeader>
    )
}

function TimeLine(props){
    const playlistNames = Object.keys(props.playlists)
    return(
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                return video.title.toLowerCase().includes(props.valorDoFiltro.toLowerCase())
                            }).map((video) => {
                                return (
                                    <a href={video.url} target= "_blank">
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                    </a>
                                )
                            })};
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

function Footer(props){
    const canais = props.favoritos
    console.log(canais[0].title)
    return(
        <StyledFavoritos>
            <section>
                <h2>Canais Favoritos</h2>
                <div>
                    {canais.map((canal) => {
                        return (
                            <a href={canal.url} target= "_blank">
                                <img src={canal.thumb} />
                                <span>{canal.title}</span>
                            </a>
                        )
                    })}
                </div>
            </section>
        </StyledFavoritos>
    )
}

export default HomePage
