function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const restaurants = JSON.parse(document.querySelector('#inputs textarea').value)
            .reduce((r, c) => {
                const [name, empStr] = c.split(' - '),
                    employees = empStr
                        .split(', ')
                        .map(e => ({
                            name: e.split(' ')[0],
                            salary: Number(e.split(' ')[1])
                        }))


                r.set(name, (r.get(name) || []).concat(employees))

                return r
            }, new Map())

        let bestRest
        for (const [k, v] of restaurants.entries()) {
            let avgSalary = getAvgSalary(v)
            if (!bestRest || avgSalary > bestRest.avgSalary)
                bestRest = {
                    name: k,
                    employees: v,
                    avgSalary
                }
        }

        let bestSalary = -1
        for (const e of bestRest.employees) {
            bestSalary = Math.max(bestSalary, e.salary)
        }

        document.querySelector('#bestRestaurant p').textContent =
            `Name: ${bestRest.name} Average Salary: ${bestRest.avgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)} `

        document.querySelector('#workers p').textContent =
            bestRest.employees
                .sort((a, b) => b.salary - a.salary)
                .map(e => `Name: ${e.name} With Salary: ${e.salary}`)
                .join(' ')

        function getAvgSalary(rest) {
            return rest.reduce((a, e) => a + e.salary, 0) / rest.length
        }
    }
}