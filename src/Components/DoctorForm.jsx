import React, { useState, useRef } from "react";
import { TextField, Button, CircularProgress, Stepper, Step, StepLabel, Card, CardContent, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DireccionConMapa from './ui/DireccionConMapa';
import DynamicTextField from './FormularioDoctor/DynamicTextField';
import DisponibilidadSemanal from './FormularioDoctor/DisponibilidadSemanal';
const steps = ["Datos Generales", "Consultorio", "Experiencia", "Calendario", "Vista Previa"];

const DoctorForm = () => {
    const [formData, setFormData] = useState({
        DrName: '', Charge: '', Phone: '', imageUrl: null,
        Services: '',
        Address: '',
        AddressMaps: '',
        Price: '',
        Experience: [], Specialization: [], Achievements: [],
        Duration: 30, AvailableSlots: [], Street: '', Colony: '', PostalCode: '', City: ''
    });
    const [activeStep, setActiveStep] = useState(0);
    const fileInputRef = useRef(null);
    const [position, setPosition] = useState([19.4326, -99.1332]); // Coordenadas por defecto


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleDireccionChange = (direccion) => {
        // Actualiza el estado del formulario con la nueva dirección
        setFormData((prevData) => ({
            ...prevData,
            Address: direccion,
        }));

        console.log("Dirección a geocodificar:", direccion);

        // Geocodifica la dirección para obtener las nuevas coordenadas
        const fetchCoordinates = async () => {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${direccion}&addressdetails=1`
            );
            const data = await res.json();
            if (data && data[0]) {
                console.log("Datos de geocodificación:", data[0]);
                const { lat, lon } = data[0];

                setPosition([lat, lon]); // Actualiza las coordenadas
            } else {
                console.log("No se encontró la dirección.");
            }
        };

        fetchCoordinates();
    };

    const handleDirectionForm = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Concatenando la dirección para asegurar que está correctamente formateada
        const address = `${formData.Street} ${formData.Colony} ${formData.PostalCode} ${formData.City}`;
        console.log("Dirección generada desde el formulario:", address);

        handleDireccionChange(address);
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleFieldChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleStepClick = (stepIndex) => {
        setActiveStep(stepIndex); // Cambia al paso seleccionado
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="overflow-x-auto">
                <Stepper activeStep={activeStep}
                    alternativeLabel sx={{
                        '& .MuiStepLabel-label': {
                            fontSize: '0.75rem'
                        }
                    }}>
                    {steps.map((label, index) => (
                        <Step key={label}  onClick={() => handleStepClick(index)}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>

            <Card className="mt-4 p-4 shadow-md">
                <CardContent>
                    {activeStep === 0 && (
                        <>
                            <div className="flex flex-col items-center mb-4">
                                <Avatar
                                    src={formData.imageUrl || "https://via.placeholder.com/150"}
                                    alt="Avatar"
                                    sx={{ width: 100, height: 100, cursor: 'pointer' }}
                                    onClick={handleAvatarClick}
                                />
                                <input
                                    type="file"
                                    name="imagen"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                            <div className="space-y-4">
                                <TextField label="Apellido Paterno del Doctor" name="DrSubName1" fullWidth onChange={handleChange} value={formData.DrSubName1} />
                                <TextField label="Apellido Materno del Doctor" name="DrSubName2" fullWidth onChange={handleChange} value={formData.DrSubName2} />
                                <TextField label="Nombre(s) del Doctor" name="DrName" fullWidth onChange={handleChange} value={formData.DrName} />
                                <TextField label="Cargo (Ej. Médico Cirujano)" name="Charge" fullWidth onChange={handleChange} value={formData.Charge} />
                                <TextField label="Teléfono" name="Phone" fullWidth onChange={handleChange} value={formData.Phone} />
                                <TextField label="Servicios Ej.( Consultorio Dental )" name="Services" fullWidth onChange={handleChange} value={formData.Services} />
                                <TextField label="Precio $" name="Price" type="number" fullWidth onChange={handleChange} value={formData.Price} />
                            </div>

                        </>
                    )}
                    {activeStep === 1 && (
                        <div className="space-y-4">
                            <TextField label="Código Postal" name="PostalCode" onBlur={handleDirectionForm} onChange={handleChange} value={formData.PostalCode} />
                            <TextField label="Ciudad" name="City" fullWidth onBlur={handleDirectionForm} onChange={handleChange} value={formData.City} />
                            <TextField label="Colonia" name="Colony" fullWidth onBlur={handleDirectionForm} onChange={handleChange} value={formData.Colony} />
                            <TextField label="Calle" name="Street" fullWidth onBlur={handleDirectionForm} onChange={handleChange} value={formData.Street} />
                            <DireccionConMapa onDireccionChange={handleDireccionChange} addressposition={position} />
                        </div>
                    )}
                    {activeStep === 2 && (
                        <div className="space-y-4">
                            Cuentanos Acerca de ti:
                            <DynamicTextField
                                label="Estudios y Especialización"
                                value={formData.Specialization}
                                onChange={(newValue) => handleFieldChange("Specialization", newValue)}
                            />
                            <DynamicTextField
                                label="Experiencia Profesional"
                                value={formData.Experience}
                                onChange={(newValue) => handleFieldChange("Experience", newValue)}
                            />
                            <DynamicTextField
                                label="Logros Académicos o Profesionales"
                                value={formData.Achievements}
                                onChange={(newValue) => handleFieldChange("Achievements", newValue)}
                            />
                            <DynamicTextField
                                label="Zona de atención"
                                value={formData.Area}
                                onChange={(newValue) => handleFieldChange("Area", newValue)}
                            />
                        </div>
                    )}
                                        {activeStep === 3 && (
                        <div className="space-y-4">
                           
                            <DisponibilidadSemanal
                  
                            />
                            
                        </div>
                    )}
                </CardContent>
            </Card>
            <div className="flex justify-between mt-4">
                {activeStep > 0 && <Button onClick={handleBack}>Atrás</Button>}
                <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}</Button>
            </div>
        </div>
    );
};

export default DoctorForm;
