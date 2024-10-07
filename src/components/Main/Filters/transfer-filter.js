
import { Checkbox, Flex } from 'antd'

import { addStopAction, removeStopAction, setAllStopsAction } from '../../../store/Reducers/stop-count-reducer'
import { useDispatch, useSelector } from 'react-redux'

import './transfer-filter.css'

const TransferFilter = () => {
    const stops = useSelector(state => state.stopCountReducer.stops)
    const dispatcher = useDispatch()

    const hasAllStops = () => {
        if (!stops)
            return false

        const allStops = [0, 1, 2, 3]
        if (stops.length !== allStops.length)
            return false

        const stopsCopy = [...stops].sort()
        for (let i = 0; i < stopsCopy.length; ++i)
            if (stopsCopy[i] !== allStops[i])
                return false

        return true
    }

    return (
        <Flex className='transfer-filter' vertical style={{ height: 'fit-content' }}>
            <div className='transfer-filter__label'>Количество пересадок</div>
            <Checkbox className='transfer-filter__option'
                      checked={ hasAllStops() }
                      onChange={ (e) => {
                        dispatcher(setAllStopsAction(e.target.checked))
                      } }>
                        Все
            </Checkbox>

            <Checkbox className='transfer-filter__option'
                      checked={ stops.includes(0) }
                      onChange={ (e) => {
                        e.target.checked ? dispatcher(addStopAction(0))
                                         : dispatcher(removeStopAction(0))
                      }}>
                        Без пересадок
            </Checkbox>

            <Checkbox className='transfer-filter__option'
                      checked={ stops.includes(1) }
                      onChange={ (e) => {
                        e.target.checked ? dispatcher(addStopAction(1))
                                         : dispatcher(removeStopAction(1))
                      }}>
                        1 пересадка
            </Checkbox>
            
            <Checkbox className='transfer-filter__option'
                      checked={ stops.includes(2) }
                      onChange={ (e) => {
                        e.target.checked ? dispatcher(addStopAction(2))
                                         : dispatcher(removeStopAction(2))
                      }}>
                        2 пересадки
            </Checkbox>
            
            <Checkbox className='transfer-filter__option'
                      checked={ stops.includes(3) }
                      onChange={ (e) => {
                        e.target.checked ? dispatcher(addStopAction(3))
                                         : dispatcher(removeStopAction(3))
                      }}>
                        3 пересадки
            </Checkbox>
        </Flex>
    )
}

export default TransferFilter