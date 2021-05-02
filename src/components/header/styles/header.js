import styled from "styled-components/macro"
import { Link as ReactRouterLink } from "react-router-dom"

export const Background = styled.div`
  display: flex;
  min-height: 800px;
  flex-direction: column;
  background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg` )});

  @media screen and (max-width: 760px) {
    min-height: 600px;
  }

  @media screen and (max-width: 500px) {
    min-height: fit-content;
  }
`

export const Wrapper = styled.div`
  align-self: center;
  max-width: 917px;
  width: 100%;
  padding: 9.5rem 1.5rem 3rem 1.5rem;
  text-align: center;


  @media screen and (max-width: 760px) {
    padding-top: 7.5rem;
    padding-bottom: 4rem;
    max-width: 600px;
  }

  @media screen and (max-width: 500px) {
    padding-top: 3rem;
    padding-bottom: 3.5rem;
    max-width: 400px;
  }
`

export const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 0 3.5rem;
`
export const Logo = styled.img`
  width: 133px;
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
