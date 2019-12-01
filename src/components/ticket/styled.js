import styled from "styled-components"

export const ListContainer = styled.div`
    .vague{
    width: 100%;
    height: .5rem;
    background: #f6f6f6;
    border-bottom: 1px solid #d8d8d8;
    padding: .075rem .146rem .073rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .local{
        width: .383rem;
        height: .342rem;
        margin-right: .146rem;
        line-height: .342rem;
        i{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAAXNSR0IArs4c6QAAAWVJREFUWAntmDFugzAUhoEhOQAH4DwwJQszx+hWdQo3YM3Mkg3Ow9aFA7RT35+SKHEwPNsPjKpaMsHPvOfvQ0KKHdZ1vev7/iMIgoI62jmO4/c8z79/h9u46jjDqqpOhPimYLZJkhyzLPtS4l6GTdPsu6670OKpAlBGFCiUIIYpEpA4MrdqaAIeHAUEdM27xAz8lRsCZ50Bxb1JcODBHuGDpZt2SxJM+BbsIcC5CWt82KYsV4GtSJjCg/su4FvCBv5FwJeELfyowNoSLvBagbUkXOEnBZaWkICfFVhKQgqeJSAtIQnPFpCSkIY3EnCVWALeWMBWYil4KwFTCTyv2Yxg6tasN1BPfyVu1Ti/3Lc61FJ3Uo9LWMOjiLUAkpkSeFTXnOBR1EkABRwknOFFBCwlRODFBAwlxOBFBZgSovDiAjMS4vBYb+pYBfPGDYdhtNk+UGJJ/XPoJWJbOSgzlvpP+Mtv4AfFZn0enf+H0QAAAABJRU5ErkJggg==) no-repeat;
            width: .087rem;
            height: .05rem;
            display: inline-block;
            background-size: cover;
            position: relative;
            vertical-align: middle;
            margin-top: 2px;
            margin-left: 5px;
            zoom: 1;
        }
    }
    input{
        box-sizing: border-box;
        -webkit-box-flex: 1;
        flex: auto;
        display: block;
        width: .9rem;
        height: .292rem;
        padding-top: 3px;
        margin-left: .208rem;
        padding-right: .221rem;
        padding-left: .292rem;
        border: 1px solid #bbb;
        border-radius: .5em;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZGNDlEMzE1RDgzMTFFNEI5QTRENDA1RDNCMDg3RTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZGNDlEMzI1RDgzMTFFNEI5QTRENDA1RDNCMDg3RTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NkY0OUQyRjVEODMxMUU0QjlBNEQ0MDVEM0IwODdFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NkY0OUQzMDVEODMxMUU0QjlBNEQ0MDVEM0IwODdFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg1dcXAAAAKqSURBVHjazJjPS1RRFMffDJYpiaKLyMBKpVImjVxIxiS1UKGkkDaWrvwHdCEDk0HQj0UbFUSUlkmzyUpU0Bi0cChSIoWhX6S0GIhZZIqh4Wb6HvgOPB44c+/zPZ0DH+7M491zv3PuveeeO55EImFkgnlESDgcTvfeKXADNIBKUMTnv8Fn8Bq8At/dElIP7gO/or85cBe81RXi3eH5ITAEZiniDxgEzeA4yAZ5oILPBvmOn32G6GNXESkEE+AC+Ad6wWOwlsZXAegGXSAHvAfXwKodIblgBtSCn/y1Uc0o+8A4OAE+gCtgU3dq+ikixjBHbay7KPvG6Ktfd43IwuzgdLTQkV2L0ccWfdbrCHkgUwX6wIIDqWGBvjz0rbRGqvF5kQurFKw7lKfywQo3wDmwlC4iLWxDDoow6CtkGSOlkGTCmnYhe0+xvaQi5AzbRReEJKfjtIqQ5NkRd0FI3DKGUh7J3q/T12s6RcWOujDGEcsYKYV8VZlHm1bN9puKkDm2jS4IabKMkVLIC7atTEJOWT59io2qCJEtFmEGDDgoJECfkVRZ1bpreoAUsJ3grAMifPSVYNWmfOhJefeERY1MVfEuRBwDL+nrk0rpaM0jXSxmyhlOn81IROhD7Dx4Cg7qCJFK6irFnATz4CHLwHRWwHfnWZ0tc1rEbrNqO6xTPEviuQyGWQAHeZQPsAYtAQdICZ8N8J0g+0jfKtAOtulXriJvTAlO+zrxCNQpTss7cIcDGiYBo6Zo/GBuWbZzwZLT+ToTXoXlgvWF5cOYKUNbrQZMmqIR5xL4qCvECStnbVLG7xvgJm+JO16w3DCZkoumKORxAd+SL1l7fNrHuRGec+3Ilh6RU99r7L1t8OL2LLk8JDpZxv6YbOk28Av8Bfc8GfX/SCbYfwEGAOXhtFDed5rtAAAAAElFTkSuQmCC) no-repeat center left #fff;
        background-size: .183rem;
    }
    a{
        box-sizing: border-box;
        color: #333;
        width: .583rem;
        display: block;
        text-align: center;
        height: .263rem;
        line-height: .263rem;
        border: 1px solid #fff;
        border-radius: 5px;
        margin-left: 8px;
    }
}

.nav{
    width: 100%;
    height: .345rem;
    ul{
        border-bottom: 1px solid #d8d8d8;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .line{
            flex: 0 0 1px;
            height: .125rem;
            background: #d8d8d8;
            overflow: hidden;
        }
        li:nth-of-type(1){
            flex: auto;
            text-align: center;
            color: #777;
        }
        li:nth-of-type(3){
            flex: auto;
            text-align: center;
            color: #777;
        }
        li:nth-of-type(5){
            flex: auto;
            text-align: center;
            color: #777;
        }
        i{
            display: inline-block;
            position: relative;
            vertical-align: middle;
            zoom: 1;
            width: 6px;
            height: 3px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC) no-repeat 50%;
            background-size: cover;
            margin-left: 5px;
        }
    }
}

.statement{
    width: 100%;
    height: .24rem;
    line-height: .24rem;
    font-size: 13px;
    color: rgb(153, 153, 153);
    text-align: center;
    background: rgb(246, 246, 246);
}

.list{
    width: 100%;
    .list_detail{
        position: relative;
        margin-left: .083rem;
        padding: .125rem .125rem .125rem 0;
        border-bottom: 1px solid #d8d8d8;
        h2{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title{
                font-size: .133rem;
                color: #333;
            }
            .price{
                color: #ff8600;
                display: inline-block;
                position: relative;
                vertical-align: middle;
                zoom: 1;
            }
        }
        h3{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 7px;
            .ads{
                color: #777;
                padding-right: 4px;
                font-size: .117rem;
                line-height: .153rem;
                font-weight: 400;
            }
        }
        h4{
            margin-top: 7px;
            i{
                box-sizing: border-box;;
                display: inline-block;
                position: relative;
                vertical-align: middle;
                zoom: 1;
                height: .167rem;
                text-align: center;
                margin-top: .7px;
                margin-right: 5px;
                padding: 1px;
                padding-top:3px;
                vertical-align: baseline;
                font-size: .1rem;
                line-height: .125rem;
                color: #6d8297;
                border: 1px solid #6d8297;
            }
        }
    }
}

`