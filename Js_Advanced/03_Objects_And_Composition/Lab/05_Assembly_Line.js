function createLib() {
    return {
        hasClima(obj) {
            Object.assign(obj, {
                temp: 21,
                tempSettings: 21,
                adjustTemp() {
                    this.temp < this.tempSettings && this.temp++
                    this.temp > this.tempSettings && this.temp--
                }
            })
        },
        hasAudio(obj) {
            Object.assign(obj, {
                currentTrack: null,
                nowPlaying() {
                    currentTrack &&
                        console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            })
        },
        hasParktronic(obj) {
            Object.assign(obj, {
                checkDistance(dist) {
                    let msg = ''

                    if (dist < 0.1) msg = "Beep! Beep! Beep!"
                    else if (dist < 0.25) msg = "Beep! Beep!"
                    else if (dist < 0.5) msg = "Beep!"

                    console.log(msg);
                }
            })
        }
    }
}