import styled from "styled-components";

export const IndexHeader = styled.h1`
    width: 580px;
    margin: 5px auto auto auto;
    user-select: none;

    @media screen and (max-width: 600px) {
        width: calc(100% - 10px);
        margin: 5px 0 0 10px;
    }
`;
