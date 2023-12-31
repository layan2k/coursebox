import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

export type Color = "primary" | "secondary" | "danger" | "warning"

export type Props = {
    children: string,
    color?: Color,
    onClick: (event:MouseEvent<HTMLButtonElement>) => void;
}

export const getColors = (color?:Color) => {
    switch (color) {
        case "primary":
            return css`
                background-color: #6d5dfc;
                color: #e5ebf5e6;
            `
        case "secondary":
            return css`
                color: #5e5c64e5;
            `
        case "danger":
            return css`
                background-color: #dc3545e6;
                color: #e4ebf5e6;
            `
        case "warning":
            return css`
                background-color: #ffca2ce6;
                color: #5e5c64e6;
            `
        default:
            return " "
    }
}

export const Button = styled.button<Props>`
    all: unset;
    display: flex;
    justify-self:center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    font-size: 1.6rem;
    width: 15rem;
    height: 4rem;
    border-radius: 1rem;
    transition: all 0.4s ease;
    ${({color}) => getColors(color)}
    &:hover{
        opacity: 0.9;
    }
    box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #ffffff ;
    &:active{
        box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7 inset, -0.5vmin -0.5vmin 1vmin #ffffff inset ;
    }
`

Button.defaultProps = {
    color: "primary",
}