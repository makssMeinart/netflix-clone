import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
`
export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 3rem;
  text-align: center;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin:0 ;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  cursor: pointer;
  border: 3px solid black;
`
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`

export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;

  &:hover > ${Picture} {
    border-color: white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }
`
