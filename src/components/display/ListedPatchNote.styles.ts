import styled from "styled-components";
import { StyledIcon } from "../util/StyledIcon";

export const LPNVersion = styled.p`
    font-weight: bold;
    margin: 0 10px 0 0;
    display: inline-block;
`;

export const LPNTitle = styled.p`
    display: inline-block;
    margin: 0;
`;

export const LPNIcons = styled.div`
    display: inline-block;
    float: right;
    user-select: none;

    ${StyledIcon} {
        display: inline-block;
        margin: 1px 0 0 3px;
        cursor: pointer;
    }
`;

export const LPNBody = styled.div`
    p:first-child {
        margin-top: 10px;
    }
    p:last-child {
        margin-bottom: 0;
    }
`;
