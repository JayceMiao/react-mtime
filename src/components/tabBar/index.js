import React,{Component} from "react"
import {TabBarRoute} from "router"
import {TabBarContainer} from "./styled"
import {withRouter} from "react-router-dom"


class TabBar extends Component{
    constructor(){
        super()

        this.state={
            activePath:"/home"
        }
    }
    render(){
        let {activePath} = this.state;
        return (
            <TabBarContainer>
                <ul>
                    {
                        TabBarRoute.map((item)=>(
                            <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={activePath === item.path?"active":""}>
                                <p>{item.path}-{activePath}</p>
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </TabBarContainer>
        )
    }
    handleTo(path){
        console.log(111)
        this.props.history.push(path)
    }
}

export default withRouter(TabBar);