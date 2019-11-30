import React,{Component,Fragment} from 'react'
import TabBar from 'components/tabBar'
export default class Layout extends Component{
    render(){
        return(
            <Fragment>
                <TabBar path={this.props.path}/>
                {/* 内容区 */}
                {this.props.children}
            </Fragment>
        )
    }
}

/**
 * 在React中接收组件内部包裹的内容
 * this.props.children
 */