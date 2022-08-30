import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    margin-top: 70px;
`

export const Input = styled.input`
    width: 295px;
    height: 30px;
    border-radius: 5px ;
    padding: 0px 0px 0px 5px;
    outline-color: #1e5bae;
`

export const SearchButton = styled.button`
    width: 300px;
    height: 30px;
    border-radius: 5px ;
    align-items: center ;
    color: #253f2c;
    background-color: #ffffff;
    border: none;
    margin-top: 7px;
    font-size: 14px;
    font-weight: bold ;
    &:hover{
        color:#4b6281;
        cursor: pointer;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
`

export const ResultContainer = styled.div`
    margin-top: 10px;
    background-color: #ffffff;
    width: 270px;
    height: 30vh;
    text-align: left ;
    padding: 15px ;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #0b162b;
    border-radius: 5px ;
`


export const ErrorMessage = styled.div`
    width: 295px;
    margin-top: 5px;
    height: 20px;
    background-color: #f5d2d6;
    border-radius: 3px;
    font-size: 12px;
    color: #622525;
    padding: 0px 0px 0px 7px;
    align-items: center ;
    display: flex;
`