import Guitar from '../models/Guitar.js'

export const getGuitars = async (req, res) => {
    try {
        const guitars = await Guitar.find()
        res.send(guitars)
    } catch (error) {
        res.send(error)
    }
}

export const getGuitar = async (req, res) => {
    try {
        const guitars = await Guitar.findOne({ model: req.params.model })
        res.send(guitars)
    } catch (error) {
        res.send(error)
    }
}

export const insertGuitar = async (req, res) => {
    const { model, description, stock, price } = req.body
    try {
        const guitar = new Guitar({
            model: model,
            description: description,
            stock: stock,
            price: price
        })
        await guitar.save()
        res.status(204).send()
    } catch (error) {
        res.send(error)
    }
}

export const updateGuitar = async (req, res) => {
    try {
        const guitar = await Guitar.updateOne({ model: req.body.model }, {
            stock: req.body.stock || stock,
            price: req.body.price
        })
        await guitar.save()
        res.status(204).send()
    } catch (error) {
        res.json(error)
    }
}

export const deleteGuitar = async (req, res) => {
    try {
        const guitar = await Guitar.deleteOne({model: req.params.model})
        await guitar.save()
        res.status(204).send()
    } catch (error) {
        res.json(error)
    }
}