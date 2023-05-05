import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('https://ipapi.co/json/');
                setCountry(response.data.country_name);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchLocation();
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <h1 className="text-white text-2xl font-bold mb-4">Songs Around You in {country}</h1>
                    {activeSong && isPlaying && <SongCard song={activeSong} />}
                    <Error />
                </div>
            )}
        </div>
    );
};

export default AroundYou;

