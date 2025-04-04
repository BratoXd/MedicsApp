import React, { useState, useCallback, useMemo } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const sessionDurations = [30, 60, 90, 120];

const DisponibilidadSemanal = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [sessionDuration, setSessionDuration] = useState(30);
    const [workingHours, setWorkingHours] = useState({ start: "08:00", end: "18:00" });
    const [appointments, setAppointments] = useState({});

    const timeSlots = useMemo(() => 
        generateSlots(workingHours.start, workingHours.end, sessionDuration, appointments, selectedDay),
        [workingHours.start, workingHours.end, sessionDuration, appointments, selectedDay]
    );

    function generateSlots(start, end, duration, appointments, selectedDay) {
        const slots = [];
        const startTime = new Date(`2023-01-01T${start}:00`);
        const endTime = new Date(`2023-01-01T${end}:00`);
        
        const dayAppointments = appointments[selectedDay] || [];
        const bookedTimes = dayAppointments.map(appt => ({
            start: new Date(`2023-01-01T${appt.start}:00`),
            end: new Date(`2023-01-01T${appt.end}:00`)
        }));

        let currentTime = startTime;
        while (currentTime < endTime) {
            const nextTime = new Date(currentTime.getTime() + duration * 60000);
            if (nextTime <= endTime) {
                const slotStart = currentTime;
                const slotEnd = nextTime;
                const slotKey = `${slotStart.toTimeString().slice(0, 5)}-${slotEnd.toTimeString().slice(0, 5)}`;

                // Verificamos si el slot se traslapa con alguna cita existente
                const hasOverlap = bookedTimes.some(appt => 
                    (slotStart < appt.end && slotEnd > appt.start)
                );

                if (!hasOverlap) {
                    slots.push({
                        start: slotStart.toTimeString().slice(0, 5),
                        end: slotEnd.toTimeString().slice(0, 5),
                        key: slotKey,
                        isBooked: false // Todos los slots generados son disponibles
                    });
                }
            }
            currentTime = nextTime;
        }
        return slots;
    }

    const toggleAvailability = useCallback((day, slotKey) => {
        const [start, end] = slotKey.split('-');
        
        setAppointments((prev) => {
            const updated = { ...prev };
            const dayAppointments = updated[day] ? [...updated[day]] : [];

            // Verificamos si el slot ya está agendado
            const existingIndex = dayAppointments.findIndex(appt => 
                appt.start === start && appt.end === end
            );

            if (existingIndex !== -1) {
                // Si existe, lo eliminamos
                dayAppointments.splice(existingIndex, 1);
            } else {
                // Verificamos si hay traslape con citas existentes
                const newStart = new Date(`2023-01-01T${start}:00`);
                const newEnd = new Date(`2023-01-01T${end}:00`);
                
                const hasOverlap = dayAppointments.some(appt => {
                    const apptStart = new Date(`2023-01-01T${appt.start}:00`);
                    const apptEnd = new Date(`2023-01-01T${appt.end}:00`);
                    return (newStart < apptEnd && newEnd > apptStart);
                });

                if (!hasOverlap) {
                    dayAppointments.push({ start, end });
                } else {
                    return prev; // No permitimos traslapes
                }
            }

            if (dayAppointments.length === 0) {
                delete updated[day];
            } else {
                updated[day] = dayAppointments;
            }

            return updated;
        });
    }, []);

    const handleDaySelect = useCallback((day) => {
        setSelectedDay(current => current === day ? null : day);
    }, []);

    return (
        <div className="space-y-4 p-4">
            <h2 className="text-xl font-bold">Selecciona tu disponibilidad</h2>
            <div className="grid grid-cols-4 gap-2">
                {daysOfWeek.map((day) => (
                    <Button
                        key={day}
                        variant={selectedDay === day ? "contained" : "outlined"}
                        fullWidth
                        onClick={() => handleDaySelect(day)}
                    >
                        {day}
                    </Button>
                ))}
            </div>

            {selectedDay && (
                <div className="space-y-4 mt-4">
                    <h3 className="text-lg font-semibold">Configurar horario para {selectedDay}</h3>
                    <ToggleButtonGroup
                        value={sessionDuration}
                        exclusive
                        onChange={(event, newValue) => newValue && setSessionDuration(newValue)}
                        className="flex justify-center"
                    >
                        {sessionDurations.map((duration) => (
                            <ToggleButton 
                                key={duration} 
                                value={duration}
                                aria-label={`${duration} minutos`}
                            >
                                {duration} min
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                    <div className="grid grid-cols-1 gap-2">
                        {timeSlots.map((slot) => (
                            <Button
                                key={slot.key}
                                fullWidth
                                variant={appointments[selectedDay]?.some(appt => 
                                    appt.start === slot.start && appt.end === slot.end
                                ) ? "contained" : "outlined"}
                                color={appointments[selectedDay]?.some(appt => 
                                    appt.start === slot.start && appt.end === slot.end
                                ) ? "primary" : "success"}
                                onClick={() => toggleAvailability(selectedDay, slot.key)}
                            >
                                {`${slot.start} - ${slot.end}`}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DisponibilidadSemanal;