'use client'

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

// Ensure you have a CSS link for MapboxGL JS in your HTML or import it in your project
// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function Map(token: string | undefined) {
    if (!token) {
        alert("Mapbox token is required!")
    }
    mapboxgl.accessToken = token || '';
    const mapContainer = useRef(null);
    const searchParams = useSearchParams()!;
    const latString = searchParams.get('lat');
    const lngString = searchParams.get('lng');
    let lat = parseFloat(latString || '0');
    let lng = parseFloat(lngString || '0');

    useEffect(() => {
        if (lat && lng && !isNaN(lat) && !isNaN(lng)) {
            const map = new mapboxgl.Map({
                container: mapContainer.current || 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // Specify the map style
                center: [lng, lat], // Set the initial center point
                zoom: 9 // Set the initial zoom level
            });

            // Clean up on unmount
            return () => map.remove();
        }
    }, [lat, lng]);

    return <div ref={mapContainer} style={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }} />;
}
