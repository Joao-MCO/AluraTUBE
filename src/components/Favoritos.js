import styled from "styled-components";

export const StyledFavoritos = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%
  }
  section {
    width: 100%;
    padding: 16px;
    div {
      align-items: center;
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
        a {
          scroll-snap-align: start;
            span {
              padding-top: 8px;
              display: block;
              padding-right: 24px;
              color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
        }
    }
  }
`;