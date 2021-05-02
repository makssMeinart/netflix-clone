import styled from "styled-components/macro"

export const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin: 0 155px;
  margin-bottom: 1.2rem;

  @media screen and (max-width: 900px) {
    font-size: 3.3rem;
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (max-width: 760px ) {
    font-size: 2.8rem;
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    margin-left: 0;
    margin-right: 0;
  }
`
export const Subtitle = styled.h2`
  font-size: 1.625rem;
  margin: 16px 155px;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (max-width: 760px ) {
    font-size: 1.3rem;
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 500px) {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 1rem;
  }
`
