import styled from "styled-components/macro"

export const Inner = styled.div``

export const Title = styled.h4`
  font-size: 1.1875rem;
  color: white;
  margin: 0;
  padding: 0 1.5em 1em 1.5em;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`

export const Wrapper = styled.div`
  height: 65px;
  margin: 0 auto;
  max-width: 665px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    height: fit-content;
  }
`
export const InputWrapper = styled.div`
  width: 100%;
`

export const InputInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  width: 100%;
`

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 0.9rem 0.5rem 0 0.5rem;
  font-weight: 500;
  border-radius: 3px;

  :focus {
    outline: none;
    border-bottom: 3px solid #ffa00a;
  }

  :focus + label {
    color: gray;
    font-weight: bold;
    font-size: 0.75rem;
    top: 25%;
  }

  @media screen and (max-width: 950px) {
    height: 60px;
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  color: #8c8c8c;
  z-index: 2;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all 0.1s ease-out;
`
export const WarningInner = styled.div``

export const Warning = styled.div`
  text-align: left;
  font-size: 0.9375rem;
  color: #ffa00a;
  padding: 6px 3px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.625rem;
  min-width: 200px;
  padding: 0 0.4em;
  color: white;
  background-color: #e50914;
  border: none;
  cursor: pointer;

  img {
    width: 17px;
    margin-left: 0.5rem;
    filter: brightness(0) invert(1);
  }

  @media screen and (max-width: 950px) {
    width: 100px;
    align-self: center;
    margin-top: .5rem;
    font-size: 1.3rem;
    padding: .7rem .7rem;
    min-width: 160px;
  }
`
