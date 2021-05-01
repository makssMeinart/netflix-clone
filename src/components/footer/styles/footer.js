import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: 0 auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Holder = styled.div``

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Link = styled.a`
  color: #757575;
  margin-bottom: .8rem;
  font-size: 0.8rem;
  text-decoration: none;
`

export const Title = styled.h3`
  color: #757575;
  font-size: 1rem;
  line-heigth: 1.2;
  cursor: pointer;
  margin-bottom: 2rem;

  :hover {
    text-decoration: underline;
  }
`

export const Text = styled.p`
  font-size: 0.9rem;
  color: #757575;
`
