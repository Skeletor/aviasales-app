
import Ticket from './ticket'
import sortConstants from '../../../store/sort-constants'
import ServerDataHandler from '../../../service/server-data-handler'

import './ticket-list.css'

import { requestTickets } from '../../../store/Reducers/ticket-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Spin } from 'antd'
import { useCallback, useEffect, useState } from 'react'

const TicketList = () => {

    const [ currentTicketCount, setCurrentTicketCount ] = useState(5)

    const isLoading = useSelector(state => state.ticketReducer.isLoading)
    const tickets = useSelector(state => state.ticketReducer.tickets)
    const stops = useSelector(state => state.stopCountReducer.stops)
    const sort = useSelector(state => state.filterReducer.sort)

    const dispatch = useDispatch()
    const request = useCallback(() => {
        requestTickets(dispatch)
    }, [dispatch])

    useEffect(() => {
        request()
    }, [request])

    const filteredTickets = [...tickets].sort((a, b) => {
        if (sort === sortConstants.price)
            return a.price - b.price

        if (sort === sortConstants.time) {
            const [ fromA, toA ] = a.segments
            const [ fromB, toB ] = b.segments

            return (fromA.duration + toA.duration) - (fromB.duration + toB.duration)
        }

        return 0
    }).filter((item) => {
        const [ from, to ] = item.segments
        const fromStops = from.stops.length
        const toStops = to.stops.length

        return stops.includes(fromStops) && stops.includes(toStops)
    })

    const ticketsToShow = filteredTickets.slice(0, currentTicketCount).map((item, index) => {
        const { carrier, price, segments } = item

        return (
            <li key={ index }>
                <Ticket price={ price } segments={ segments } imageSource={ ServerDataHandler.buildImageUrl(carrier) } />
            </li>
        )
    })

    const remainingTicketCount = filteredTickets.length - currentTicketCount
    const postfixWord = remainingTicketCount === 1 ? 'билет'
                                                   : remainingTicketCount >= 5 ? 'билетов'
                                                   : 'билета'

    const button = remainingTicketCount > 0 ? (
        <Button type='primary'
                    onClick={ () => setCurrentTicketCount(currentTicketCount + 5) }>
                    Показать еще { Math.min(5, remainingTicketCount) } { postfixWord }
        </Button>
    ) : null

    return isLoading ? 
    (<Spin></Spin>) 
    : ticketsToShow.length === 0 ? <span className='ticket-list__empty-list-description'>По указанным фильтрам нет билетов</span>
    : (
        <>
            <ul>
                { ticketsToShow }
            </ul>
            { button }
        </>
    )
}

export default TicketList