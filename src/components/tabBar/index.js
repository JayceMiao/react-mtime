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
                        {
                            TabBarRoute.map((item)=>(
                                <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path ===item.path?'active':""}>
                                    {item.text}
                                </li>
                            ))
                        }
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