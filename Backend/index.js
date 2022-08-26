import express from "express"
import cors from 'cors';
import * as faceapi from "face-api.js";
import path from 'path';
import canvas from 'canvas';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import multer from "multer";
import bodyParser from 'body-parser';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
console.log("Line 23");
app.use(cors())

console.log("Line 26");
app.use(bodyParser.urlencoded({ extended: true }));
const { Canvas, Image, ImageData } = canvas;
console.log("Line 29");
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
faceapi.env.monkeyPatch({ fetch: fetch });
console.log("Line 33");
app.post('/users', upload.single('avatar'), async (req, res) => {
    console.log("debug")
    formData = await req.body;
    var userJSON = await JSON.parse(formData.image);

    const avatar = await Buffer.from(userJSON.avatar, "utf-8");

    delete userJSON.avatar
    userJSON.avatar = avatar
    console.log(userJSON)


    const user = new Users(userJSON)
    try {


        await user.save()
        res.send({ 'message': 'Registeration Successfull' })

    }
    catch (e) {
        res.send({ 'response': 'registeration failed' })
        console.log(e)
    }

})

app.get('/', async (req, res) => {
    const MODEL_URL = path.join(__dirname, '/models');
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL)
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL)
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL)
    await faceapi.nets.ageGenderNet.loadFromDisk(MODEL_URL)
    await faceapi.nets.faceExpressionNet.loadFromDisk(MODEL_URL)
    await faceapi.nets.tinyFaceDetector.loadFromDisk(MODEL_URL)
    const input1 = await canvas.loadImage('https://www.bollywoodhungama.com/wp-content/uploads/2022/08/Salman-Khan-likely-to-revert-to-original-title-of-Kabhi-Eid-Kabhi-Diwali-wants-to-avoid-cultural-specific-community-identifying-film-title-Bhaijaan-1.jpg')
    const input2 = await canvas.loadImage('./train6.jpeg')
    //const detection1 = await faceapi.detectSingleFace(input1).withFaceLandmarks().withFaceDescriptor();
    //const detection2 = await faceapi.detectSingleFace(input2).withFaceLandmarks().withFaceDescriptor();
    //const distance = faceapi.euclideanDistance(detection1, detection2);
    //console.log(distance);
    const results = await faceapi
        .detectAllFaces(input1, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()


    if (!results.length) {
        console.log("no face")
        return
    }

    // create FaceMatcher with automatically assigned labels
    // from the detection results for the reference image
    const faceMatcher = new faceapi.FaceMatcher(results)
    const results_ = await faceapi
        .detectAllFaces(input2, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors()
    const min_val = 0.48
    results_.forEach(fd => {
        const bestMatch = faceMatcher.findBestMatch(fd.descriptor)
        if (bestMatch._distance < min_val) {
            console.log("found a match!")
            console.log(bestMatch._distance)
        } else {
            console.log("not a match", bestMatch._distance)
        }

    })
    return res.send('Received a GET HTTP method');
});
app.listen(5000, () => console.log("han bol"))
/*
const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })
faceapi.env.monkeyPatch({ fetch: fetch });
app.listen(5000, () => console.log("han"))

app.get('/', async (req, res) => {
    const MODEL_URL = '/models' //model directory

    await faceapi.loadFaceRecognitionModel(MODEL_URL) //model to Recognise Face
    const input1 = await faceapi.fetchImage('https://static.wikia.nocookie.net/warner-bros-entertainment/images/2/2d/Sheldon_Cooper.jpg/revision/latest?cb=20220406225928')
    const input2 = await faceapi.fetchImage('https://static.wikia.nocookie.net/bigbangtheory/images/8/8b/Sheldon_Cooper_Profile.jpg/revision/latest?cb=20220501003614')
    const detection1 = faceapi.detectSingleFace(input1).withFaceLandmarks().withFaceDescriptors();
    const detection2 = faceapi.detectSingleFace(input2).withFaceLandmarks().withFaceDescriptors();
    const distance = faceapi.euclideanDistance(detection1, detection2);
    console.log(distance);
    res.send("hello world")
})
*/




