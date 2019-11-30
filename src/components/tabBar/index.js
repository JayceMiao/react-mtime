import React,{Component} from "react"
import {TabBarRoute} from "router"
import {TabBarContainer} from "./styled"
import {withRouter} from "react-router-dom"
@withRouter

class TabBar extends Component{
    render(){
        let {path} = this.props;
        return (
            <TabBarContainer>
                <div className="top">
                    <ul>
                        <li></li>
                        <li>首页</li>
                        <li>购票</li>
                        <li>商城</li>
                        <li>发现</li>
                        <li></li>
                    </ul>
                </div>
            </TabBarContainer>
        )
    }
    handleTo(path){
        this.props.history.push(path)
    }
}

export default TabBar;