"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const node_path_1 = __importDefault(require("node:path"));
const app = (0, express_1.default)();
const PORT = 8030;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(node_path_1.default.join(__dirname, '../../client/build')));
app.get('/api', (req, res) => {
    res.json({ message: 'API GET' });
});
app.get('*', (req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, '../../client/build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map