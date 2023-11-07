import express from "express";
import {getPessoas, createPessoa, editPessoa, deletePessoa} from "../controllers/usersController.js"

const router = express.Router()

router.get("/", getPessoas )
router.post("/adicionarContato", createPessoa)
router.put("/editarContato/:id", editPessoa)
router.delete("/deletarContato/:id", deletePessoa)

export default router