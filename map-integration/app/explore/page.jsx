"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import indianHeritageSites from "@/data/indianHeritageSites";

export default function ExplorePage() {

  const [sites, setSites] = useState(indianHeritageSites);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    fetch(`${apiUrl}/sites/map`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.sites?.length) {
          setSites(
            data.sites.map((site) => ({
              id: site._id,
              name: site.name,
              latitude: site.latitude,
              longitude: site.longitude,
              category: site.category,
              state: site.state,
              description: site.description,
              image: site.image,
            })),
          );
        }
      })
      .catch(() => {
        setSites(indianHeritageSites);
      });
  }, []);

  const filteredSites = sites.filter((site) => {

    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      site.category === category;

    return matchesSearch && matchesCategory;
  });

  return (

    <div className="flex h-screen bg-black text-white">

      {/* Sidebar */}

      <div className="w-80 bg-zinc-900 p-4 overflow-y-auto">

        <h1 className="text-3xl font-bold mb-6">
          🇮🇳 Indian Heritage Explorer
        </h1>

        {/* Search */}

        <input
          type="text"
          placeholder="Search monuments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            p-3
            rounded-xl
            mb-4
            text-black
          "
        />

        {/* Category Filter */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            w-full
            p-3
            rounded-xl
            mb-6
            text-black
          "
        >

          <option>All</option>
          <option>Temple</option>
          <option>Fort</option>
          <option>Monument</option>
          <option>Caves</option>
          <option>Archaeological Site</option>

        </select>

        {/* Heritage Cards */}

        {filteredSites.map((site) => (

          <div
            key={site.id}
            className="
              bg-zinc-800
              rounded-2xl
              overflow-hidden
              mb-6
            "
          >

            <img
              src={site.image}
              alt={site.name}
              className="
                h-40
                w-full
                object-cover
              "
            />

            <div className="p-4">

              <h2 className="text-xl font-bold">
                {site.name}
              </h2>

              <p className="text-sm text-gray-400">
                {site.state}
              </p>

              <p className="mt-2 text-sm">
                {site.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* India Map */}

      <div className="flex-1">

        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          className="h-full w-full"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredSites.map((site) => (

            <Marker
              key={site.id}
              position={[
                site.latitude,
                site.longitude,
              ]}
            >

              <Popup>

                <div className="w-56">

                  <img
                    src={site.image}
                    alt={site.name}
                    className="
                      h-32
                      w-full
                      object-cover
                      rounded-lg
                    "
                  />

                  <h2 className="text-lg font-bold mt-2">
                    {site.name}
                  </h2>

                  <p className="text-sm">
                    {site.state}
                  </p>

                  <p className="mt-2 text-sm">
                    {site.description}
                  </p>

                </div>

              </Popup>

            </Marker>

          ))}

        </MapContainer>

      </div>

    </div>
  );
}
