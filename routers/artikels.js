const { Artikel } = require('../models/artikel');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const artikelList = await Artikel.find();

    if(!artikelList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(artikelList);
})

router.get('/:id', async(req,res)=>{
    const artikel = await Artikel.findById(req.params.id);

    if(!artikel) {
        res.status(500).json({message: 'The Artikel with the given ID was not found.'})
    } 
    res.status(200).send(artikel);
})



router.post('/', async (req,res)=>{
    let artikel = new Artikel({
        title: req.body.title,
        description: req.body.description,
        isiBerita: req.body.isiBerita,
        image: req.body.image,
        isShowed: req.body.isShowed,
        dateCreated: req.body.dateCreated
    })
    artikel = await artikel.save();

    if(!artikel)
    return res.status(400).send('the category cannot be created!')

    res.send(artikel);
})


// router.put('/:id',async (req, res)=> {
//     const artikel = await Artikel.findByIdAndUpdate(
//         req.params.id,
//         {
//             title: req.body.title,
//             description: req.body.description,
//             isiBerita: req.body.isiBerita,
//             image: req.body.image,
//             isShowed: req.body.isShowed,
//             dateCreated: req.body.dateCreated
//         },
//         { new: true}
//     )

//     if(!artikel)
//     return res.status(400).send('the category cannot be created!')

//     res.send(artikel);
// })

// router.delete('/:id', (req, res)=>{
//     Artikel.findByIdAndRemove(req.params.id).then(artikel =>{
//         if(artikel) {
//             return res.status(200).json({success: true, message: 'the category is deleted!'})
//         } else {
//             return res.status(404).json({success: false , message: "category not found!"})
//         }
//     }).catch(err=>{
//        return res.status(500).json({success: false, error: err}) 
//     })
// })

module.exports = router;