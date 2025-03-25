import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const DoctorForm = () => {
    const [formData, setFormData] = useState(
        {
            DrName: '',
            Charge: '',
            Phone: '',
            Hospital: '',
            Prize: '',
            DrExperience: '',
            DrEspecializacion: '',
            DrLogros: '',
            AtentionZone: '',
            Schedule: '',
            Services: '',
            imagen: null
        }
    );

const handleChange = (e) => {
    const {name , value } = e.target;
    setFormData({...formData , [name] : value})
}


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:4000/InsertarTempMedicos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Error Network');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error); 
    }

    console.log(formData);
};


    return(
        <form  onSubmit={handleSubmit}  className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg" > 
            <h2 className="text-2xl mb-4 text-center">Formulario de Médico</h2>
            <TextField
                label="Nombre del Doctor"
                name="DrName"
                value={formData.DrName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
  <TextField
                label="Cargo"
                name="Charge"
                value={formData.Charge}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Teléfono"
                name="Phone"
                type="tel"
                value={formData.Phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Hospital"
                name="Hospital"
                select
                value={formData.Hospital}
                onChange={handleChange}
                fullWidth
                margin="normal"
                
            >
                <MenuItem value={1}>Hospital 1</MenuItem>
                <MenuItem value={2}>Hospital 2</MenuItem>
                <MenuItem value={3}>Hospital 3</MenuItem>
                <MenuItem value={4}>Hospital 4</MenuItem>
                <MenuItem value={5}>Hospital 5</MenuItem>
            </TextField>
            <TextField
                label="Precio"
                name="Prize"
                type="number"
                value={formData.Prize}
                onChange={handleChange}
                fullWidth
                margin="normal"
                
            />
            <TextField
                label="Experiencia del Doctor"
                name="DrExperience"
                value={formData.DrExperience}
                onChange={handleChange}
                fullWidth
                margin="normal"
                
            />
            <TextField
                label="Especialización"
                name="DrEspecializacion"
                value={formData.DrEspecializacion}
                onChange={handleChange}
                fullWidth
                margin="normal"
                
            />
            <TextField
                label="Logros"
                name="DrLogros"
                value={formData.DrLogros}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Zona de Atención"
                name="AtentionZone"
                value={formData.AtentionZone}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Horario"
                name="Schedule"
                value={formData.Schedule}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Servicios"
                name="Services"
                value={formData.Services}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
                     <input
                type="file"
                name="imagen"
                onChange={(e) => setFormData({ ...formData, imagen: e.target.files[0] })}
                className="mb-4"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Guardar
            </Button>


        </form>  
    );





};


export default DoctorForm;