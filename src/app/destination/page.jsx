"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/destination")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = [...destinations];

    if (category) {
      result = result.filter((d) => d.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter(
        (d) => d.price >= min && (!max || d.price <= max)
      );
    }

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "name")
      result.sort((a, b) =>
        a.destinationName.localeCompare(b.destinationName)
      );

    setFiltered(result);
  }, [category, priceRange, sortBy, destinations]);

  return (
    <div className="min-h-screen bg-white pt-[90px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-0 py-10">

        {/* Header */}
        <h1 className="text-[50px]  text-gray-900 mb-2 tracking-tight">
          Explore All Destinations
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Find your perfect travel experience from our curated collection
        </p>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-300 mb-4">
          {/* Category */}
          <div className="border-r border-gray-300">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-5 py-4 text-xs text-gray-500 bg-white focus:outline-none uppercase tracking-[0.15em] cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">CATEGORY</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
              <option value="City">City</option>
              <option value="Adventure">Adventure</option>
              <option value="Cultural">Cultural</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="border-r border-gray-300">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-5 py-4 text-xs text-gray-500 bg-white focus:outline-none uppercase tracking-[0.15em] cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">PRICE RANGE</option>
              <option value="0-1000">Under $1,000</option>
              <option value="1000-2000">$1,000 – $2,000</option>
              <option value="2000-3000">$2,000 – $3,000</option>
              <option value="3000-99999">$3,000+</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-5 py-4 text-xs text-gray-500 bg-white focus:outline-none uppercase tracking-[0.15em] cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
              }}
            >
              <option value="">SORT BY</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {/* Count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing {filtered.length} destinations
        </p>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-[220px] w-full mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/4" />
              </div>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((destination) => (
              <div key={destination._id} className="group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden h-[220px] bg-gray-100">
                  <img
                    src={destination.imageUrl}
                    alt={destination.destinationName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm">
                    <span className="text-xs font-semibold text-gray-800">
                      {destination.rating || "4.5"}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 fill-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-3 pb-4">
                  {/* Country */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1.5">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{destination.country}</span>
                  </div>

                  {/* Name + Price */}
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-base font-bold text-gray-900 leading-tight">
                      {destination.destinationName}
                    </h2>
                    <p className="text-sm font-bold text-gray-900 ml-2 whitespace-nowrap">
                      ${Number(destination.price).toLocaleString()}
                      <span className="text-xs font-normal text-gray-400">
                        /Person
                      </span>
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{destination.duration}</span>
                  </div>

                  {/* Book Now */}
                  <Link
                    href={`/destination/${destination._id}`}
                    className="inline-flex items-center gap-1.5 text-[#15A1BF] text-xs font-bold tracking-wider uppercase hover:gap-3 transition-all duration-200"
                  >
                    Book Now
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-200 text-7xl mb-4">✈</p>
            <p className="text-gray-500 text-lg font-light">
              No destinations found
            </p>
            <p className="text-gray-300 text-sm mt-1">
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;