import styled from "styled-components"

export const TabBarContainer = styled.div`
    width:100%;
    height: .433rem;
    background:#fff;
    border-bottom: 1px solid #ccc;
    position:fixed;
    top:0;
    left:0;
    .top{
    width: 100%;
    height: .433rem;
    background: #1c2635;
    ul{
        width: 100%;
        height: 100%;
        .active{
            color:#c33;
        }
        li{
            width: .467rem;
            height: 100%;
            float: left;
            color: #bbb;
            line-height: .433rem;
            text-align: center;
            font-size: .125rem;
        }
        li:nth-of-type(1){
            width: .867rem;
            height: 100%;
            background: url(http://static1.mtime.cn/html5/20191122140130/images/2014/logo_mtime.png) no-repeat center;
            background-size: .654rem .208rem;
        }
        li:nth-of-type(6){
            width: .383rem;
            height: 100%;
            background: url(http://static1.mtime.cn/html5/20191122140130/images/2014/ico_my.png) no-repeat center;
            background-size: .167rem .208rem;
        }
    }
}

`