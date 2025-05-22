import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000, // Tiempo máximo de espera en ms
    headers: {
        "Content-Type": "application/json",
    },
});

// Opcional: Agregar interceptores para manejar peticiones o respuestas
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Aquí puedes hacer manejo de errores de manera centralizada
        console.error("Axios error:", error);
        return Promise.reject(error);
    }
);

export default axiosClient;