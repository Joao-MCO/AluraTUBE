function HomePage() {
    const mensagem = "Bem-Vindo ao AluraTUBE!"
    const estiloHomePage = {backgroundColor: "red"};
    return (
        <div style={estiloHomePage}>
            <Menu></Menu>
            <Header></Header>
            <TimeLine></TimeLine>
        </div>
        
    )
  }
  
function Menu(){

    return(
        <div>Menu</div>
    )
}

function Header(){

    return(
        <div>Header</div>
    )
}

function TimeLine(){

    return(
        <div>TimeLine</div>
    )
}

export default HomePage