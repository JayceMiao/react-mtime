import React,{Component} from 'react'
import {PageContainer} from "common/styled"
import Ticket from "components/ticket"
class Buyticket extends Component{
    render(){
        return (
            <PageContainer>
                <Ticket/>
            </PageContainer>
        )
    }
}

export default Buyticket;