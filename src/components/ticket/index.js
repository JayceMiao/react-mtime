import React,{Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './mapStore'
import {ListContainer} from './styled'

@connect(mapStateToProps,mapDispatchToProps)

class Ticket extends Component{
    render(){
        let {ticket} = this.props;
        // console.log(ticket.data,222)
        return (
            <ListContainer>
                <div className="vague">
                    <div className="local">
                        <b>北京</b>
                        <i></i>
                    </div>
                <input type="text" placeholder="筛选影院"/>
                <a href="#">搜索</a>
                </div>
                <div className="nav">
                    <ul>
                        <li><span>离我最近</span><i></i></li>
                        <li className="line"></li>
                        <li><span>全城</span><i></i></li>
                        <li className="line"></li>
                        <li><span>影厅特效</span><i></i></li>
                    </ul>    
                </div>
                <div className="statement">
                    以下影院均非时光网自营
                </div>
                <div className="list">
                    {
                        ticket.map((item,index)=>(
                            <div className="list_detail" key={item.cinemaId}>
                                <h2>
                                    <p className="title">{item.cinameName}</p>
                                    <p className="price">{item.minPrice/100}元起</p>
                                </h2>
                                <h3>
                                    <p className="ads">{item.address}</p>
                                </h3>
                                <h4>
                                    <i className="D3" style={{display:item.feature.has3D?'inline':'none'}}>3D</i>
                                    <i className="D4" style={{display:item.feature.hasFeature4D?'inline':'none'}}>4D</i>
                                    <i className="K4" style={{display:item.feature.hasFeature4K?'inline':'none'}}>4K</i>
                                    <i className="Dolby" style={{display:item.feature.hasFeatureDolby?'inline':'none'}}>杜比</i>
                                    <i className="Huge" style={{display:item.feature.hasFeatureHuge?'inline':'none'}}>巨幕</i>
                                    <i className="IMAX" style={{display:item.feature.hasIMAX?'inline':'none'}}>IMAX</i>
                                    <i className="Loveseat" style={{display:item.feature.hasLoveseat?'inline':'none'}}>情侣座</i>
                                    <i className="VIP" style={{display:item.feature.hasVIP?'inline':'none'}}>VIP</i>
                                </h4>
                            </div>
                        ))
                    }
                </div>
            </ListContainer>
        )
    }
    componentDidMount(){
        this.props.handleTicketAsyncData();
    }
}


export default Ticket;