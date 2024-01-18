function solve(params) {
    console.log(
        params
            .sort((a, b) => a.localeCompare(b))
            .map((a, i) => `${i + 1}.${a}`)
            .join('\n')
    );
}