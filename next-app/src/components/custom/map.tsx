'use client'

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const defaultCoords: number[] = [-122.3076595, 47.654538]

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
    const lng = parseFloat(searchParams.get('lng') || `${defaultCoords[0]}`);
    const lat = parseFloat(searchParams.get('lat') || `${defaultCoords[1]}`);

    useEffect(() => {
        if (mapContainer.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: 3,
                interactive: false
            });

            map.on('load', function () {
                const zoomOffset = 0.02;
                map.fitBounds([
                    [lng - zoomOffset, lat - zoomOffset], // Southwest coordinates
                    [lng + zoomOffset, lat + zoomOffset]  // Northeast coordinates
                ]);
                const marker = new mapboxgl.Marker({
                    color: "#e95635",
                    draggable: false,

                })
                .setLngLat([lng, lat])
                .addTo(map);
            });
            

            return () => map.remove();
        } });

    return (
        <div ref={mapContainer} style={{ width: '100%', height: '400px', backgroundColor: 'lightgray' }} 
            className="rounded-lg bg-clip-border border">
      </div>
    );
}