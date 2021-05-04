import styled from "styled-components/macro"

export const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 6.5rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  background: rgba(0, 0, 0, 0.75);
  z-index: 5;

  @media screen and (max-width: 740px) {
    padding: 1.5rem;
    border-top: 1px solid #555;
    background: #000;
  }
`

export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 40px;
`
export const Row = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const ItemWrapper = styled.li`
  font-size: 0.8125rem;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  margin-bottom: 16px;
  padding-right: 12px;

  @media screen and (max-width: 740px) {
    width: 30%;
  }

  @media screen and (max-width: 600px) {
    width: 50%;
  }
`
export const Link = styled.a`
  color: #757575;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`
