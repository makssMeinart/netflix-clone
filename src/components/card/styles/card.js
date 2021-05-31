import styled from "styled-components/macro"

export const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  margin-left: 30px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media screen and (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`

export const SubTitle = styled.p`
  font-size: 0.75rem;
  color: white;
  font-weigth: bold;
  margin: 0;
  user-select: none;
  display: none;
`

export const Text = styled.p`
  margin-top: 5px;
  font-size: 0.625rem;
  color: white;
  user-select: none;
  display: none;
`

export const FeatureText = styled.p`
  font-size: 1.125rem;
  color: white;
  margin: 0;
  font-weight: ${({fontWeigth}) => fontWeigth === "bold" ? "bold" : "normal"};

  @media screen and (max-width@ 600px ) {
    lineh-heigth: 1.3;
  }
`

export const Feature = styled.div`
  position: relative;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: right;
  background-color: black;
  height: 360px;

  @media screen and (max-width: 1000px) {
    height: auto;
    backgorund-size: auto;

    ${Title} {
      font-size: 1.25rem;
      line-height: 1;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 0.875rem;
    }
  }
  
`

export const FeatureTitle = styled.p`
  margin-left: 0;
`


export const Maturity = styled.p`
  background-color: ${({ rating }) => (rating > 15 ? "red" : "green")};
  border-radius: 15px;
  width: fit-content;
  text-align: center;
  padding: 6px;
  margin-right: 12px;
  font-size: 0.75rem;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0, .2);

`

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: none;
  top: 20px;
  right: 20px;

  img {
    filter: brightness(0) invert(1);
    height: 24px;
  }
`

export const Content = styled.div`
  margin: 55px;
  max-width: 500px;
  
  @media screen and (max-width: 1000px) {
    max-width: none;
    margin: 30px;
  }
`

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background: #0000008f;
`

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 30px;
  justify-content: space-around;
`

export const Item = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: column;
  cursor: pointer;
  transition: transform .2s;
  position: relative;

  &:hover {
    transform: scale(1.2);
    z-index: 99;
  }

  @media screen and (min-width: 1200px) {
    :hover ${Meta}, :hover ${Text}, :hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

`

export const Image = styled.img`
  border: none;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  margin: 0;
  padding: 0;
`
