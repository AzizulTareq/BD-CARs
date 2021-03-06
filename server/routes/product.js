const express = require('express');
const router = express.Router();
const { Product } = require("../models/Product");
const multer = require('multer')
const { auth } = require("../middleware/auth");
const asyncHandler = require('express-async-handler')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(ext != '.jpg' || ext != '.png') {
            return cb(res.status(400).end('only jpg and png files are allowed'), false)
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage}).single("file")
// product
router.post("/uploadImage", auth, (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err})
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
});

router.post('/uploadProduct', auth, (req, res) => {
    const product = new Product(req.body)

    product.save((err) => {
        if(err) return res.status(400).json({ success: false, err})
        return res.status(200).json({ success: true })
    })
})

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

router.get('/:id', asyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product not found'})
    }
}))

module.exports = router;