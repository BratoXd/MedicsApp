import { MapContainer, TileLayer, Marker, useMap,useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";

// Componente de Mapa
const DireccionConMapa = ({ addressposition }) => {
    const [position, setPosition] = useState(addressposition); // Posición inicial (por defecto, se pasa como prop)
    const [direccion, setDireccion] = useState("");

    const customIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [32, 32],
    });

    // Hook para actualizar la vista del mapa cuando la posición cambia
    const MapUpdater = () => {
        const map = useMap(); // Obtiene la instancia del mapa
        useEffect(() => {
            map.setView(position); // Cambia el centro del mapa
        }, [position, map]); // Se actualiza cuando 'position' cambia
        return null;
    };

    // Manejar la geocodificación reversa (al hacer clic en el mapa)
    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setPosition([lat, lng]); // Actualiza la posición con las coordenadas del clic
            },
        });
        return null;
    };

    // Obtener la dirección desde las coordenadas (lat, lon) y actualizar el estado
    useEffect(() => {
        const fetchDireccion = async () => {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`
            );
            const data = await res.json();
            const display = data.display_name || "Ubicación no encontrada";
            setDireccion(display); // Actualiza la dirección mostrada
        };
        fetchDireccion();
    }, [position]);

    // Actualiza la posición cuando cambia la prop 'addressposition'
    useEffect(() => {
        setPosition(addressposition); // Cambia la posición cuando la prop cambia
    }, [addressposition]);

    return (
        <div className="mt-4 space-y-2">
            <div className="h-64 w-full rounded border overflow-hidden">
                <MapContainer center={position} zoom={16} scrollWheelZoom={true} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="© OpenStreetMap"
                    />
                    <MapUpdater /> {/* Forzar la actualización del mapa */}
                    <MapClickHandler /> {/* Maneja clics en el mapa */}
                    <Marker position={position} icon={customIcon} />
                </MapContainer>
            </div>
            <p className="text-sm text-gray-600">Dirección seleccionada:</p>
            <p className="text-sm font-semibold">{direccion}</p>
        </div>
    );
};

export default DireccionConMapa;
