class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department)
            throw new Error('Invalid input!')

        if (salary < 0) throw new Error('Invalid input!')

        let employee = { name, salary, position }

        this.departments[department]
            ? this.departments[department].push(employee)
            : this.departments[department] = [employee]

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let best = Object.entries(this.departments)
            .map(d => ({ title: d[0], avgSalary: d[1].reduce((t, c) => t + c.salary, 0) / d[1].length, employees: d[1] }))
            .sort((a, b) => b.avgSalary - a.avgSalary)[0]

        return [
            `Best Department is: ${best.title}`,
            `Average salary: ${best.avgSalary.toFixed(2)}`,
            `${best.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
                .map(e => `${e.name} ${e.salary} ${e.position}`).join('\n')}`
        ].join('\n')
    }
}


let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment())
