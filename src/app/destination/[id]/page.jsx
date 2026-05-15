import BookingCard from "@/components/BookingCard";
import { DeleteDialog } from "@/components/DeleteDialog";
import EditModal from "@/components/EditModal";

import Link from "next/link";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;



  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });
  const destination = await res.json();

  console.log("destination:", destination) 


  return (
    <div className="min-h-screen bg-white pt-[80px]">
       
      {/* Top Bar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link
          href="/destination"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Destinations
        </Link>

        <div className="flex gap-2">
          {/* Edit Button */}
          <EditModal destination={destination} /> 
          <DeleteDialog destination={destination} />
          {/* Cancel/Delete Button */}
       
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="w-full h-[250px] sm:h-[350px] md:h-[430px] overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.destinationName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left — Main Info */}
          <div className="flex-1">
            {/* Country */}
            <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
              <svg
                className="w-4 h-4"
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

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              {destination.destinationName}
            </h1>

            {/* Rating + Duration */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-semibold text-gray-800">
                  {destination.rating || "4.9"}
                </span>
                <span className="text-sm text-gray-400">
                  ({destination.reviews || "234"} reviews)
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <svg
                  className="w-4 h-4"
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
                <span className="font-medium">{destination.duration}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Overview
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Highlights
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-4">
                {destination.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Luxury beachfront accommodation",
                  "Visit Uluwatu Temple at sunset",
                  "Traditional Balinese spa treatment",
                  "Private beach dinner experience",
                  "Sunrise trek to Mount Batur",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Booking Card */}
         <BookingCard destination={destination}/>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;