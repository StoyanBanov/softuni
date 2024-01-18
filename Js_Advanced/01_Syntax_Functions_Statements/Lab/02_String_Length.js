(...strs) => {
    const totalLEngth = strs.reduce((t, c) => t + c.length, 0)
    console.log(totalLEngth);
    console.log(Math.floor(totalLEngth / strs.length));
}