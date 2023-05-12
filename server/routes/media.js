const express = require('express');
const path = require('path');
const Media = require('../models/mediaSchema')
const mongoose = require('mongoose');
const axios = require('axios').default;

const router = express.Router();

router.get('/:fileid', async (req, res) => {
    let fileid = req.params.fileid
    let mediaFile = await Media.findOne({ 'data.id': fileid })

    if (!mediaFile) return res.status(404).json({
        status: 404,
        message: `Couldn't media file with id ${fileid}`
    })

    res.redirect(mediaFile.data.link)

})

router.post('/', async (req, res) => {
    const title = req.body.title;
    const image = req.body.image;
    const video = req.body.video;
    const name = req.body.name;

    if ((image != undefined && !image.length > 0) || (video != undefined && !video.length > 0)) return res.status(400).json({
        "status": res.statusCode,
        "message": "Image/Video url/buffer needed in order to post to imgur!"
    })

    let postBody = {};
    if (title != undefined && title.length > 0) postBody.title = title;
    if (image != undefined && image.length > 0) postBody.image = image;
    if (video != undefined && video.length > 0) postBody.video = video;
    if (name != undefined && name.length > 0) postBody.name = name;

    try {
        let post = await axios.post("https://api.imgur.com/3/image", postBody, {
            headers: {
                'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}`
            }
        });

        let mediaFile = await Media.findOne({ 'data.id': post.data.data.id })

        if (!mediaFile) {
            mediaFile = await Media.create({
                _id: new mongoose.Types.ObjectId(),
                data: post.data.data,
                success: post.data.success,
                status: post.data.status
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ status: 400, message: "An error ocurred while trying to post the media file" })
    }

    res.json(post.data)


})

module.exports = router;