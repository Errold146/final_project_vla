import './spinner.css';

export default function Spinner() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <div className="text-xl font-bold text-gray-300">Cargando productos...</div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );
}
