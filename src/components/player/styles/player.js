import styled from "styled-components/macro"

export const Container = styled.div``

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  video {
    height: 100%;
    width: 100%;
  }
`


export const Button = styled.button`
  background-color: #ff0a16;
  border: none;
  padding: .45em 2em;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #ff0a0899;
    transform: scale(1.05);
  }
`
