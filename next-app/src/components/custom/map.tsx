'use client'

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

interface MapProps {
    token: string | undefined;
}

const defaultCoords: number[] = [-122.3076595, 47.654538]

export default function Map({ token }: MapProps) {
    if (!token) {
        alert("Mapbox token is required!")
    }

    mapboxgl.accessToken = token || '';
    const mapContainer = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams()!;
    let lng = parseFloat(searchParams.get('lng') || `${defaultCoords[0]}`);
    let lat = parseFloat(searchParams.get('lat') || `${defaultCoords[1]}`);

    // Validate lat and lng to be within Earth's geographical bounds
    lat = isFinite(lat) && Math.abs(lat) <= 90 ? lat : defaultCoords[1];
    lng = isFinite(lng) && Math.abs(lng) <= 180 ? lng : defaultCoords[0];

    useEffect(() => {
        if (mapContainer.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 3,
                interactive: false // This line prevents the map from being moved around
            });

            // TODO: map marker currently does not work as expected :(
            // const marker = new mapboxgl.Marker({
            //     color: "#e95635",
            //     draggable: false
            // }).setLngLat([lng, lat])
            //     .addTo(map);

            // zooms map in
            map.on('load', function () {
                const zoomOffset = 0.02
                map.fitBounds([
                    [lng - zoomOffset, lat - zoomOffset], // Southwest coordinates
                    [lng + zoomOffset, lat + zoomOffset]  // Northeast coordinates
                ]);
            });

            return () => map.remove();
        }
    }, [lat, lng]);

    return (
        <div ref={mapContainer} style={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }} />
    );
}