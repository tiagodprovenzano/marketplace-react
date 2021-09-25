import styled, { css } from "styled-components"

const SideMenuWrapper = styled.div`${() => css`
    display: flex;
    flex-direction: column;
    background-color: #92aab0;
    padding: 10px 15px 15px;
    min-width: 150px;
    .side-menu-links{
        flex-grow: 1;
    }
`}`

export default SideMenuWrapper