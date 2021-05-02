import styled from "styled-components/macro"

export const Item = styled.div`
  border-bottom: 8px solid #222;

  &:first-child {
    border-top: 8px solid #222;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 1280px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  @media (max-width: 600px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

export const Container = styled.div``

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;

  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    max-width: 100%;
  }
`

export const Title = styled.h2`
  font-size: 3.125rem;
  max-width: 547px;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 2.7rem;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.625rem;
  max-width: 90%;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    max-width: 320px;
    width: 100%;
  }
`

export const Image = styled.img`
  max-width: 100%;
`
