import { Link } from "react-router-dom"
import styled from "styled-components/macro"

export const Container = styled.div``
export const Frame = styled.form`
  max-width: 450px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  padding-bottom: 130px;
  border-radius: 4px;
  margin-bottom: 6rem;

  @media screen and (max-width: 740px) {
    margin-top: -85px;
    min-width: 100%;
    margin-bottom: 0;
    padding: 6rem 2rem 5rem 2rem;
    background: #000;
  }
`
export const Inner = styled.div``
export const Error = styled.div`
  word-break: break-all;
  font-size: 0.875rem;
  word-wrap: wrap;
  line-height: 1.3;
  padding: 0.5rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #e87c03;
  color: white;
`
export const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;

  @media screen and (max-width: 740px) {
    margin-bottom: 20px;
  }
}
`
export const InputFrame = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-color: #333333;
  margin-bottom: 1rem;
  display: flex;

  :focus-within {
    background: #444;
    border-bottom: 3px solid #e87c03;

    button {
      display: block;
    }
  }
`
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  color: #8c8c8c;
  top: 50%;
  left: 20px;
  transform: translateY(-40%);
  pointer-events: none;
  transition: all 0.1s ease-out;
`
export const ShowButton = styled.button`
  height: 50px;
  padding: 0 12px;
  display: none;
  font-size: 14px;
  color: #8c8c8c;
  text-transform: uppercase;
  background: #444;
  border: none;
  cursor: pointer;
`
export const Input = styled.input`
  width: 100%;
  border: 0;
  color: #fff;
  background: inherit;
  height: 50px;
  line-height: 20px;
  padding: 16px 20px 0;

  :focus {
    outline: none;
    background: #444;
  }

  :focus + label {
    top: 7px;
    font-size: 0.6875rem;
  }
`
export const Button = styled.button`
  font-size: 1rem;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  background: #e50914;
  border: none;
  color: white;
  padding: 1rem 0;
  cursor: pointer;

  :disabled {
    background: #590000;
    cursor: initial;
  }
`
export const SignupButton = styled(Link)`
  color: white;
  margin-left: 8px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`
export const SignupContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.p`
  color: #737373;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 16px;
`
export const SmallText = styled.p`
  margin-top: 11px;
  font-size: 0.8125rem;
  color: #8c8c8c;
`
