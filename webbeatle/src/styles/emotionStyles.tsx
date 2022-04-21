import styled from '@emotion/styled';
import { StyledOptionButtonProps } from '../types';

export const LogoStyled = styled.div`
    width: 95%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    .Title {
        width: 25%;
    }
    .AbbeyRoad {
        width: 7%;
    }
`;

export const StyledOptionButton = styled.button<StyledOptionButtonProps>`
    visibility: ${props => props.visibility};
    margin: 3px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    font-size: medium;
    color: white;
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    &:active {
        background-color: rgba(255, 101, 101, 0.1);
    }
`;

export const StyledInput = styled.input`
    margin: 3px;
    padding: 20px;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    font-size: large;
    color: white;
`;
