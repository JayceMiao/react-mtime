import styled from "styled-components"

export const TabBarContainer = styled.div`
    width:100%;
    height: 1rem;
    background:#fff;
    border-bottom: 1px solid #ccc;
    position:fixed;
    top:0;
    left:0;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center; 
        .active{
            color:#c33;
        }
    }
    li{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        span{
            font-size:18px;
        }
    }

`