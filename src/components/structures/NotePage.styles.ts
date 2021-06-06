import styled, { ThemeProps } from "styled-components";
import { shift } from "../../lib/theme/resolve";
import { Theme } from "../../lib/theme/theme";
import { StyledIcon } from "../util/StyledIcon";

export const NotePageContainer = styled.div`
    padding: 5px 10px;
    width: 600px;
    margin: auto;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 0;
    }
`;

export const NotePageHeader = styled.h1`
    width: 580px;
    margin: 5px auto auto auto;
    user-select: none;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 5px 0 0 10px;
    }
`;

export const NotePageVersion = styled.h4`
    width: 580px;
    margin: 0 auto auto auto;
    user-select: none;

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 5px 0 0 10px;
    }
`;

export const NotePageID = styled.p`
    width: 580px;
    margin: 0 auto auto auto;
    user-select: none;
    color: ${(props) => shift(props.theme.shiftfront, 0.3, props.theme.back)};

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 5px 0 0 10px;
    }
`;

export const NotePageBackContainer = styled.div<ThemeProps<Theme>>`
    height: 25px;
    position: absolute;
    top: 3px;
    left: 5px;
    padding: 2px 5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 5px;
    transition: 0.1s background-color;
    &:hover {
        background-color: ${(props) =>
            shift(props.theme.shiftback, 0.03, props.theme.back)};
    }
    ${StyledIcon} {
        display: inline-block;
        margin: 0;
        vertical-align: middle;
    }
    p {
        display: inline-block;
        margin: -2px 0 0 7px;
        vertical-align: middle;
    }
`;
