import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DynamicTextField = ({ label, value = [""], onChange }) => {
    const [fields, setFields] = useState(value.length > 0 ? value : [""]);

    const handleAddField = () => {
        if (fields.length < 5) {
            setFields([...fields, ""]);
        }
    };

    const handleFieldChange = (index, newValue) => {
        const updatedFields = [...fields];
        updatedFields[index] = newValue;
        setFields(updatedFields);
        onChange(updatedFields);
    };

    return (
        <div className="space-y-2">
            {/* Primer campo con el botón "+" al lado */}
            <div className="flex items-center space-x-2">
                <TextField
                    label={label}
                    value={fields[0]}
                    onChange={(e) => handleFieldChange(0, e.target.value)}
                    fullWidth
                />
                {fields.length < 5 && (
                    <IconButton onClick={handleAddField} color="primary">
                        <AddIcon />
                    </IconButton>
                )}
            </div>

            {/* Los demás campos aparecen abajo */}
            {fields.slice(1).map((field, index) => (
                <TextField
                    key={index + 1}
                    label={label}
                    value={field}
                    onChange={(e) => handleFieldChange(index + 1, e.target.value)}
                    fullWidth
                />
            ))}
        </div>
    );
};

export default DynamicTextField;
