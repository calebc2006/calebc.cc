export function parseDate(dateString) {
    const split = dateString.split("T")
    return `${split[0]} ${split[1]}`
}
