import styled from "styled-components/macro"
import { Link, Link as ReactRouterLink } from "react-router-dom"

export const Background = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  background: url(${({ src }) =>
    src ? `images/misc/${src}.jpg` : `images/misc/home-bg.jpg`});
  background-size: cover;
  background-position: center center center center;
  background-repeat: no-repeat;
  backdrop-filter: contrast(1)
  position: relative;
  
  @media screen and (max-width: 1100px) {
    ${({ backgroundRemoveOnSmallVP }) =>
      backgroundRemoveOnSmallVP && "background: none"}
  }

  @media screen and (max-width: 760px) {
    min-height: 600px;
    ${({ backgroundRemoveOnSmallVP }) => 
      backgroundRemoveOnSmallVP && "min-height: fit-content"}
  }

  @media screen and (max-width: 500px) {
    min-height: fit-content;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  img {
    filter: brightness(0) invert(1);
    width: 1rem;
  }
`

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  height: 30px;
  font-size: 0.875rem;
  border: 1px solid white;
  transition: width .5s;
  margin-left: ${({active}) => (active === true ? "10px" : "0")};
  opacity: ${({active}) => (active === true ? "1" : "0")};
  width: ${({active}) => (active === true ? "200px" : "0")};
  padding: ${({active}) => (active === true ? "0 10px" : "0")};
`

export const PlayButton = styled.div`
  padding: 10px 20px;
  color: #000;
  background: #e6e6e6;
  box-shadow: 0 .6vw 1vw -0 -.4vw rgba(0,0,0, .35);
  max-width: 130px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.25rem;
  border-radius: 5px;


  :hover {
    background-color: #ff1e1e;
    color: white;
  }
`

export const Content = styled.div`
  padding: 5rem 0;

  @media screen and (max-width: 900px) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 760px) {
    padding: 3rem 0;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 75px 0; 
  max-width: 950px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 950px) {
    max-width: 85%;
  }

  @media screen and (max-width: 400px) {
    padding-top: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 3.5rem;
  z-index: 10;

  @media screen and (max-width: 760px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  
`

export const Logo = styled.img`
  width: 133px;

  @media screen and (max-width: 500px) {
    width: 90px;
  }
`
export const Dropdown = styled.div`
  display: none;
  background-color: #000;
  position: absolute;
  padding: 0.625rem;
  width: fit-content;
  top: 32px;
  right: 10px;
`

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-position: center;
  background-size: contain;&:nth-child(1) {
    margin-left: 0;
  }
  cursor: pointer;
  border: none;
  width: 32px;
  height: 32px;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  :hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 1.1rem;
  padding: 0.5rem 1.1rem;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  line-height: 1.2;

  :hover {
    background-color: #f40612;
    background-size: contain;
  }
`
export const Feature = styled(Container)`
  padding: 150px 0 400px 0;
  flex-direction: column;
  text-align: left;
  width: 50%;
  margin-left: 3rem;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 1.375rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const TextLink = styled.p`
  color: white;
  text-decoration: none;
  font-weight: ${({ active }) => (active === true ? "700" : "400")};
  cursor: pointer;
  margin: 0 0 0 20px;

  &:hover {
    font-weight: bold;
  }

  &:nth-child(1) {
    margin-left: 0;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 3.125rem;
  line-height: 1;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`
