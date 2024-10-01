import './Oficina_Oficina_Detalhes.css';
import { FaLocationDot, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiPasswordFill } from "react-icons/pi";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Propriedades {
    oficina: {
        id: string;
        imagem1: string;
        nome: string;
        localizacao: string;
        referência: string;
        telefone: string;
        CEP: string;
        atendimento: string;
        oficinaServices: { services: string[] }[];
    };
}
const whiteMapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f0f0f0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f0f0f0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e0e0e0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    }
];

const darkMapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#484848"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8b8b8b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];

const Oficina_Oficina_Detalhes = (props: Propriedades) => {
    const [coordinates, setCoordinates] = useState<{ lat: number, lng: number } | null>(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false); // State to manage InfoWindow visibility

    useEffect(() => {
        if (props.oficina.localizacao) {
            const fetchCoordinates = async () => {
                try {
                    const response = await axios.get(
                        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(props.oficina.localizacao)}&key=AIzaSyDunJKtID0A45o5E1arwy6c9Sn5Gi_5A6Y`
                    );

                    console.log('API Response:', response.data);

                    if (response.data.results.length > 0) {
                        const location = response.data.results[0].geometry.location;
                        setCoordinates({ lat: location.lat, lng: location.lng });
                    } else {
                        console.warn("No results found for the provided address.");
                        setCoordinates({ lat: -23.55052, lng: -46.633308 });
                    }
                } catch (error) {
                    console.error("Error fetching coordinates:", error);
                }
            };

            fetchCoordinates();
        }
    }, [props.oficina.localizacao]);

    const handleMarkerClick = () => {
        setShowInfoWindow(true); // Show the InfoWindow when the marker is clicked
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleClassChange = () => {
            const darkModeEnabled = document.documentElement.classList.contains('dark-mode');
            setIsDarkMode(darkModeEnabled);
        };

        // Set initial dark mode state
        handleClassChange();

        // Listen for changes in the class
        const observer = new MutationObserver(handleClassChange);
        observer.observe(document.documentElement, { attributes: true });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className='oficina_detalhes' aria-label={`Detalhes da oficina ${props.oficina.nome}`}>
                <div className='mais_infos'>
                    <div className="Endereco">
                        <a>
                            <FaLocationDot size={18} />
                            <div>
                                Endereço
                                {props.oficina.localizacao === "" ? <p>Esta oficina não informou a localização</p> : <p>{props.oficina.localizacao}</p>}
                            </div>
                        </a>
                        <a>
                            <FaLocationArrow size={18} />
                            <div>
                                Referência
                                {props.oficina.referência === "" ? <p>Esta oficina não informou a referência</p> : <p>{props.oficina.referência}</p>}
                            </div>
                        </a>
                    </div>
                    <div className='Telefone'>
                        <a>
                            <BsFillTelephoneFill size={18} />
                            <div>
                                Telefone
                                {props.oficina.telefone === "" ? <p>Esta oficina não informou o telefone</p> : <p>{props.oficina.telefone}</p>}
                            </div>
                        </a>
                        <a>
                            <PiPasswordFill size={18} />
                            <div>
                                CEP
                                {props.oficina.CEP === "" ? <p>Esta oficina não informou o CEP</p> : <p>{props.oficina.CEP}</p>}
                            </div>
                        </a>
                    </div>
                    <div className='Atendimento'>
                        <a>
                            <MdOutlineAccessTimeFilled size={20} />
                            <div>
                                Atendimento
                                {props.oficina.atendimento === "" ? <p>Esta oficina não informou o atendimento</p> : <p>{props.oficina.atendimento}</p>}
                            </div>
                        </a>
                    </div>
                </div>
                <div className='maps'>
                {coordinates && (
                    <LoadScript googleMapsApiKey="AIzaSyDunJKtID0A45o5E1arwy6c9Sn5Gi_5A6Y">
                        <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={coordinates}
                            zoom={17}
                            options={{
                                styles: isDarkMode ? darkMapStyle : whiteMapStyle // Apply dark style if dark mode is enabled
                            }}
                        >
                            <Marker 
                                position={coordinates} 
                                onClick={handleMarkerClick} // Show InfoWindow on click
                            />
                            {showInfoWindow && (
                                <InfoWindow 
                                    position={coordinates} 
                                    onCloseClick={() => setShowInfoWindow(false)} // Close the InfoWindow
                                >
                                    <div className='maps_container'>
                                        <h4>{props.oficina.nome}</h4>
                                        <p>{props.oficina.localizacao}</p>
                                        <p>Telefone: {props.oficina.telefone}</p>
                                        <p>Atendimento: {props.oficina.atendimento}</p>
                                    </div>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                )}
                </div>

                <div className='servicos_detalhes'>
                    <div className='busca_servicos_detalhes'>
                        <h3>Serviços</h3>
                        <form action="" aria-label="Buscar serviços">
                            <label htmlFor="buscar_detalhes">
                                <input type="text" placeholder='Buscar' id='buscar_detalhes'/>
                            </label>
                        </form>
                    </div>
                    <div className='lista_servicos_detalhes'>
                        <ul role="list">
                          {props.oficina.oficinaServices.flatMap((oficinaServices) => oficinaServices.services).map((services) => (
                            <li key={services}>{services}</li>
                          ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Oficina_Oficina_Detalhes;
