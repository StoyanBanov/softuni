function solve(worker) {
    worker.dizziness &&
        (worker.levelOfHydrated += 0.1 * worker.weight * worker.experience)

    return worker
}