const middlewere ={}

middlewere.validasi = (req, res, next) => {
    try {
        const {password, verifikasiPassword} = req.body
        if(password.length < 8 || verifikasiPassword.length <8) {return res.status(400).json({message: 'Password setidaknya harus 8 karakter'})
    }
    next ()
} catch (error) {
        helper.controllerErrorHandler(error,res)
    }
}

module.exports = middlewere