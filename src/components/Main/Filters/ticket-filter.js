
import { Radio } from 'antd'

import { useDispatch, useSelector } from 'react-redux'

import sortConstants from '../../../store/sort-constants'
import { setSortAction } from '../../../store/Reducers/filter-reducer'

import './ticket-filter.css'

const options = [
    {
        label: 'Самый дешевый',
        value: sortConstants.price
    },
    {
        label: 'Самый быстрый',
        value: sortConstants.time
    },
    {
        label: 'Оптимальный',
        value: sortConstants.optimal
    }
]

const TicketFilter = () => {
    
    const sort = useSelector(state => state.filterReducer.sort)
    const dispatch = useDispatch()

    const sortChanged = (e) => dispatch(setSortAction(e.target.value))

    return (
        <>
            <Radio.Group className='ticket-filter'
                         optionType='button'
                         buttonStyle='solid'
                         options={ options }
                         defaultValue={ sort }
                         onChange={ sortChanged } />
        </>
    )
}

export default TicketFilter