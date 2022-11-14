import styled from "styled-components";
import config from "../config.json";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";
import React from "react"

function HomePage() {
    const [valorDaBusca, setValorDaBusca] = React.useState("")
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
            <Menu valorDaBusca = {valorDaBusca} setValorDaBusca = {setValorDaBusca}/>
            <Header />
            <TimeLine valorDoFiltro = {valorDaBusca} playlists={config.playlists}/>
        </div>
        </>        
    )
  }
  
  const StyledHeader = styled.div`
  img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
  }
  .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-color: green;
  background-image: url(${config.banner});
  height: 400px;
`;

function Header(){
    return(
        <StyledHeader>
            <StyledBanner />
            <div>
                <section className='user-info'>
                    <section>
                        <img src={`${config.logo}`} />
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
            <Footer favoritos={config.favoritos} />=
        </StyledTimeline>
    )
}

function Footer(props){
    const canais = props.favoritos
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
