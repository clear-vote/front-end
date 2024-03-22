'use client'

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

interface MapProps {
    token: string | undefined;
}

export default function Map({ token }: MapProps) {
    if (!token) {
        alert("Mapbox token is required!")
    }
    mapboxgl.accessToken = token || '';
    const mapContainer = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams()!;
    const latString = searchParams.get('lat');
    const lngString = searchParams.get('lng');
    const lat = parseFloat(latString || 'NaN');
    const lng = parseFloat(lngString || 'NaN');

    useEffect(() => {
        if (lat && lng && !isNaN(lat) && !isNaN(lng) && mapContainer.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current || 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 9
            });

            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map);

            return () => map.remove();
        }
    }, [lat, lng]);

    return (
        <div ref={mapContainer} style={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }} />
    );
}
