import { StyledIcon } from "../util/StyledIcon";
import styled from "styled-components";

export const GlobalIcons = styled.div`
    position: fixed;
    bottom: 5px;
    right: 10px;

    ${StyledIcon} {
        display: inline-block;
        margin: 0 5px 0 5px;
        opacity: 0.3;
        cursor: pointer;
    }
`;
