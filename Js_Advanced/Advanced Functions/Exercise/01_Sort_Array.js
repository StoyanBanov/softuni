function sort(nums, crit) {
    return nums.sort((a, b) => crit == 'asc' ? a - b : b - a)
}