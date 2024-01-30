function solve(params, criteria) {
    const [key, val] = criteria.split('-')
    console.log(
        JSON.parse(params)
            .filter(p => criteria == 'all' || p[key] == val)
            .map((p, i) => `${i}. ${p.first_name} ${p.last_name} - ${p.email}`)
            .join('\n')
    )
}