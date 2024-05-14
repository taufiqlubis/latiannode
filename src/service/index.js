const service = {}

service.panggilNAma = (nama, lastName) => {
    try {
        return `Hallo ${nama + ' ' + lastName}`
    } catch {
        throw error

    }
}
service.validasiPassword = (password, verifikasiPassword) => {
    try {
        return password == verifikasiPassword
    }
    catch (error) {
        throw error
    }
}
module.exports = service