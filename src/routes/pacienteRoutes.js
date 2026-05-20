import { Router } from "expres";
import { Paciente } from "../models/Paciente.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const nuevoPaciente = await Paciente.create(req.body);
    res
      .status(201)
      .json({ message: "Paciente Registrado", paciente: nuevoPaciente });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al registrar Paciente", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const pacientes = Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    rest
      .status(500)
      .json({ message: "Error al obtener la lista", error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.dni);
    if (paciente) {
      res.status(200).json(paciente);
    } else {
      res.status(404).json({ message: "Paciente no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar el paciente", error: error.message });
  }
});
router.put('/:dni', async (req, res) => {
    try {
        const paciente = await Product.findByPk(req.params.dni);
        if (paciente) {
            await paciente.update(req,body);
            res.status(200).json({message: "Datos actualizados", paciente});
        } else{
            res.status(404).json({message:"Paciente no encontrado"});            
        }
    } catch(error){
        res.status(400).json({message:"Error actualizar", error: error.message});

    }    
});
    router.delete('/:id', async (req, res) => {
    try {
        const borrados= Paciente.destroy({where:{dni:req.params.dni}});
        if(borrados > 0){
            res.status(200).json({message:"Paciente Eliminado"});
        } else{
            res.status(404).json({message:"Paciente no encontrado"});      
        } 
    } catch (error) {
        res.status(500).json({message:"Error al eliminadr, error:error.message"});
    }
});
export default router;