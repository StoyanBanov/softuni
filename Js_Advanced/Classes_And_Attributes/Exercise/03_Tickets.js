function solution(params, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    return params.map(p => new Ticket(...p.split('|'))).sort((a, b) => criterion == 'price' ? a.price - b.price : a[criterion].localeCompare(b[criterion]))
}

let ar = solution(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
console.log(solution(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))