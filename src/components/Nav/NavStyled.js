import styled from "@emotion/styled";
export const NavStyled = styled.nav`
    margin: 0;
    padding: 0;

    .list {
        list-style: none;

        height:100%;

        margin:0;
        padding:0;

        display: flex;
        align-items: stretch;
    }

    .list-item {
        display: flex;
        align-items: center;
        padding: 0 28px;
    }

    .list-item.active {
        background-color: #f5f6f7;
    }

`;
