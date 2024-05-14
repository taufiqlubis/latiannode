const helper = require("../helper")
const service = require("../service")

const controller = {}

controller .panggilNama = (req, res) => {
    try {
        const fullname = req.body.nama
        const lastName = req.params.lastName
        const result = service.panggilNAma(fullname, lastName)

        res.status(200).json({
            message: result
        })
    } catch (error) {
        helper.controllerErrorHandler(error, res)
    }

}

controller.registrasi = (req, res) => {
    try {
        const {firstName, lastName, userName, password, verifikasiPassword} =req.body
        const verificator = service.validasiPassword(password, verifikasiPassword)

        if(!verificator) res.status(400).json({message: 'Password Tidak Sesuai'})
        
        res.status(200).json({message: 'Berhasil Registrasi'})
    } catch (error) {
        helper.controllerErrorHandler(error, res)
    }
}

module.exports = controller