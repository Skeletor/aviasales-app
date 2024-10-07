
import TransferFilter from './Filters/transfer-filter'
import TicketFilter from './Filters/ticket-filter'
import TicketList from './TicketList/ticket-list'

import { Flex } from 'antd'

import './main.css'

const Main = () => {

    return (
        <Flex>
            <TransferFilter />
            <Flex vertical>
                <TicketFilter />
                <TicketList />
            </Flex>
        </Flex>
    )
}

export default Main