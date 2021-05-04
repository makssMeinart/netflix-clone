import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom"

export const Background = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  background: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`});

  @media screen and (max-width: 760px) {
    min-height: 600px;
  }

  @media screen and (max-width: 500px) {
    min-height: fit-content;
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
  height: 50px;
  display: flex;
  align-items: center;
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
export const Logo = styled.img`
  width: 133px;

  @media screen and (max-width: 500px) {
    width: 90px;
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
  }
`
