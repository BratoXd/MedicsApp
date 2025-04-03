import { useEffect, useRef } from "react";
import { Button } from "@mui/material";

const VideoConsultation = () => {
  const jitsiContainer = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    const loadJitsiScript = () => {
      if (window.JitsiMeetExternalAPI) {
        initJitsi();
      } else {
        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = initJitsi;
        document.body.appendChild(script);
      }
    };

    const initJitsi = () => {
      if (!jitsiContainer.current || apiRef.current) return;

      apiRef.current = new window.JitsiMeetExternalAPI("meet.jit.si", {
        roomName: `ConsultaMedica-${Date.now()}`,
        parentNode: jitsiContainer.current,
        width: "100%",
        height: "500px",
      });
    };

    loadJitsiScript();

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Iniciar Nueva Consulta
      </Button>
      <div ref={jitsiContainer} style={{ width: "100%", height: "500px", marginTop: "10px" }} />
    </div>
  );
};

export default VideoConsultation;
