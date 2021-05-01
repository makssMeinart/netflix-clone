import styled from "styled-components/macro"

export const Container = styled.div`
  border-bottom: 8px solid #222;
  padding: 0 4rem;
  padding-top: 3rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 550px) {
    padding-right:0;
    padding-left: 0;
  }

  @media screen and (max-width: 360px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
`

export const Inner = styled.div`
  max-width: 815px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 950px) {
    max-width: 715px;
  }
`

export const Header = styled.h2`
  font-size: 3.125rem;
  color: white;
  margin-bottom: 3.5rem;

  @media screen and (max-width: 950px) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 3.5rem;
`

export const Item = styled.div``

export const Top = styled.div`
  height: 75px;
  background-color: #303030;
  padding: 0em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #000;

  @media screen and (max-width: 950px) {
    height: 57px;
  }

  @media screen and (max-width: 550px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`

export const Title = styled.h4`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: .9;
  text-align: left;
  margin: 0;

  @media screen and (max-width: 950px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.1rem;
  }

`

export const Dropdown = styled.div`
  background-color: #303030;
  transition: all 0.2s ease-out;
`

export const Body = styled.p`
  margin: 0;
  font-size: 1.6rem;
  padding: 1.2em;
  text-align: left;

  @media screen and (max-width: 950px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2.7rem;
  font-weight: 100;
  transition: 0.3s ease all;

  @media screen and (max-width: 950px) {
    font-size: 2.3rem;
  }
`