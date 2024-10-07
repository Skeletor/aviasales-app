
import { add } from 'date-fns'

export const getDurationString = (durationMinutes) => {
    const hours = parseInt(durationMinutes / 60)
    const minutes = durationMinutes - hours * 60

    return `${hours}ч ${minutes}м`
}

export const calculateDestinationDate = (originTime, minutesToAdd) => {
    const date = new Date(originTime)
    return add(date, { minutes: minutesToAdd })
}

export const getNiceNumberString = (number) => ("000" + number).slice(-2)