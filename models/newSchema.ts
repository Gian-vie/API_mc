import mongoose from "mongoose";

export const NewSchema = new mongoose.Schema({
    titulo: { type: String},
    chapeu: { type: String},
    text: { type: String},
    autor: { type: String},
    imagem: { type: String},
    dataPublicacao: { type: String},
    tags: { type: String},
    link: { type: String},
    alivio: { type: String}
});