import express, { Request, Response } from 'express';
import cors from 'cors';
import path from "node:path";
import { createClient } from 'contentful';
import mongoose from 'mongoose';


const app = express();
const PORT = 1111;

const corsOptions = {
    origin: 'https://blogspace-frontend.onrender.com',
    credentials: true, // Allow cookies
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'client/build')));

const client = createClient(
    {
        space: 'b9oig2p1tdgo',
        accessToken: 'Jg4zqce-uLF-LnvALGLBrzJ_4C8S85CoJOxgLWWh3EA'
    }
);

app.get('api/posts',async(req,res)=>{
   try{
       const entries = await client.getEntries({
           content_type : 'blogPage',
       })
       res.json(entries.items);
   }
   catch (error){
       res.status(500).json({error: 'Error fetching posts Error:1'})
   }
});

mongoose.connect('mongodb+srv://admin:admin@contactus.2lxaz.mongodb.net/?retryWrites=true&w=majority&appName=contactUs')
    .then(()=>console.log("DB Connection Successful!"))
    .catch((error) => console.error("Error:",error));

const contactSchema = new mongoose.Schema({
   name : {type: String, required:true},
    email:{type: String, required:true},
    message:{type:String, required:true}

});

const Contact = mongoose.model('Contact',contactSchema);

app.post('api/contact',async(req,res)=>{
    try{
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    }
    catch (error){
        res.status(400).json({error: 'Error submitting form data'})
    }
});

const newsLetterSchema = new mongoose.Schema(
    {
        name :{type:String,required:true},
        email:{type:String,required:true},
        phonenumber:{type: String,required:true},
        receiveemails: {type:String, required:true}
    }
);

const newsLetter = mongoose.model('NewsLetter',newsLetterSchema);

app.post('api/newsletter',async (req,res)=>{
   try{
       const newNewsLetter = new newsLetter(req.body);
       const savedNewsLetter = await newNewsLetter.save();
       res.status(201).json(savedNewsLetter);
   }
   catch(error){
       res.status(400).json({error: 'Error submitting form data'})
   }
});

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

