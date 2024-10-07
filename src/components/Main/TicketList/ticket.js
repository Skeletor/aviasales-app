import { Card, Flex } from 'antd'

import { getDurationString, getNiceNumberString, calculateDestinationDate } from '../../../service/date-helper'

import './ticket.css'

const flexMarginStyle = {
    marginBottom: '12px'
}

const Ticket = (props) => {
    const { price, imageSource, segments } = props

    const [ from, to ] = segments

    const fromDate = new Date(from.date)
    const fromDateDestination = calculateDestinationDate(from.date, from.duration)

    const toDate = new Date(to.date)
    const toDateDestination = calculateDestinationDate(to.date, to.duration)

    const getProperWordVariation = (number) => {
        return number === 1 ? 'ПЕРЕСАДКА' 
                            : number >= 2 && number <= 4 ? 'ПЕРЕСАДКИ'
                            : 'ПЕРЕСАДОК'
    }

    const fromStops = from.stops.join(', ')
    const toStops = to.stops.join(', ')

    return (
        <Card className='ticket'>
            <Flex justify='space-between' align='center' style={ flexMarginStyle }>
                <span className='ticket__price'>{ price } Р</span>
                <img src={ imageSource } alt='airlines logo' />
            </Flex>

            <Flex justify='space-between' style={ flexMarginStyle }>
                <Flex vertical>
                    <span className='ticket__description'>{ from.origin } - { from.destination }</span>
                    <span className='ticket__details'>{ getNiceNumberString(fromDate.getHours()) }:{ getNiceNumberString(fromDate.getMinutes()) }
                        {' '} - {' '} 
                        { getNiceNumberString(fromDateDestination.getHours()) }:{ getNiceNumberString(fromDateDestination.getMinutes()) }</span>
                </Flex>

                <Flex vertical>
                    <span className='ticket__description'>В ПУТИ</span>
                    <span className='ticket__details'>{ getDurationString(from.duration) }</span>
                </Flex>

                <Flex vertical>
                    <span className='ticket__description'>{ from.stops.length } { getProperWordVariation(from.stops.length) }</span>
                    <span className='ticket__details'>{ fromStops }</span>
                </Flex>
            </Flex>

            <Flex justify='space-between'>
                <Flex vertical>
                <span className='ticket__description'>{ to.origin } - { to.destination }</span>
                    <span className='ticket__details'>{ getNiceNumberString(toDate.getHours()) }:{ getNiceNumberString(toDate.getMinutes()) }
                        {' '} - {' '} 
                        { getNiceNumberString(toDateDestination.getHours()) }:{ getNiceNumberString(toDateDestination.getMinutes()) }</span>
                </Flex>

                <Flex vertical>
                    <span className='ticket__description'>В ПУТИ</span>
                    <span className='ticket__details'>{ getDurationString(to.duration) }</span>
                </Flex>

                <Flex vertical>
                    <span className='ticket__description'>{ to.stops.length } { getProperWordVariation(to.stops.length) }</span>
                    <span className='ticket__details'>{ toStops }</span>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Ticket