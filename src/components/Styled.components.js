import styled from 'styled-components'
import img from '../assets/bg.jpg'

export const Button = styled.button`
    background: black;
    border-radius: 1rem;
    cursor: pointer;
    padding-inline: 1rem;
    margin: 9px;
    color: white;

`

export const DivContiner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 17px;
    padding-right: 17px;
    background-image: url(${img})
`

export const DivMovie = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2.5;
`

export const MovieDivCard = styled.article`
    border: solid 2px red;
    margin: 1rem

`

export const Title = styled.h1`
    word-wrap: break-word;
    

`

export const Image = styled.img`
    width: 13.8rem;

`
