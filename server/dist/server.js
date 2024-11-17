"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_path_1 = __importDefault(require("node:path"));
const contentful_1 = require("contentful");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 1111;
const corsOptions = {
    origin: 'https://blogspace-frontend.onrender.com',
    credentials: true, // Allow cookies
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.static(node_path_1.default.resolve(__dirname, 'client/build')));
const client = (0, contentful_1.createClient)({
    space: 'b9oig2p1tdgo',
    accessToken: 'Jg4zqce-uLF-LnvALGLBrzJ_4C8S85CoJOxgLWWh3EA'
});
app.get('https://blogspace-frontend.onrender.com/api/posts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entries = yield client.getEntries({
            content_type: 'blogPage',
        });
        res.json(entries.items);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching posts Error:1' });
    }
}));
mongoose_1.default.connect('mongodb+srv://admin:admin@contactus.2lxaz.mongodb.net/?retryWrites=true&w=majority&appName=contactUs')
    .then(() => console.log("DB Connection Successful!"))
    .catch((error) => console.error("Error:", error));
const contactSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});
const Contact = mongoose_1.default.model('Contact', contactSchema);
app.post('/api/contact', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newContact = new Contact(req.body);
        const savedContact = yield newContact.save();
        res.status(201).json(savedContact);
    }
    catch (error) {
        res.status(400).json({ error: 'Error submitting form data' });
    }
}));
const newsLetterSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String, required: true },
    receiveemails: { type: String, required: true }
});
const newsLetter = mongoose_1.default.model('NewsLetter', newsLetterSchema);
app.post('/api/newsletter', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newNewsLetter = new newsLetter(req.body);
        const savedNewsLetter = yield newNewsLetter.save();
        res.status(201).json(savedNewsLetter);
    }
    catch (error) {
        res.status(400).json({ error: 'Error submitting form data' });
    }
}));
app.get('*', (req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, './client/build/static', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map