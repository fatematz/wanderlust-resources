import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Calendar, MapPin, Eye, Trash2, CheckCircle, Clock } from "lucide-react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="min-h-screen my-30 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Bookings</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage and view your upcoming travel plans
          </p>
        </div>

        {/* Booking Cards */}
        <div className="border border-dashed border-gray-300 rounded-2xl p-4 flex flex-col gap-4">
          {data.length === 0 ? (
            <p className="text-center text-gray-400 py-16 text-sm">
              No bookings found.
            </p>
          ) : (
            data.map((booking) => (
              <BookingCard key={booking._id} booking={booking} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const BookingCard = ({ booking }) => {
  const isConfirmed = booking.status === "confirmed";

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
      {/* Image */}
      <div className="w-full sm:w-64 h-44 sm:h-auto flex-shrink-0">
        <img
          src={booking.imageUrl}
          alt={booking.destinationName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4">
        <div className="flex flex-col gap-2">
          {/* Status Badge */}
          {isConfirmed ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 w-fit">
              <CheckCircle size={13} />
              Confirmed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 w-fit">
              <Clock size={13} />
              Pending
            </span>
          )}

          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-800">
            {booking.destinationName}
          </h2>

          {/* Meta */}
          <div className="flex flex-col gap-1 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-gray-400" />
              Departure:{" "}
              {booking.departureDate
                ? new Date(booking.departureDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "May 15, 2026"}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gray-400" />
              Booking ID: {booking._id?.slice(-4) || "N/A"}
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-cyan-500 mt-1">
            ${booking.price}
          </p>
        </div>

        {/* Actions */}
        <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 justify-center px-5 py-2 rounded-lg border border-red-300 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors w-full sm:w-auto">
            <Trash2 size={14} />
            Cancel
          </button>
          <button className="flex items-center gap-2 justify-center px-5 py-2 rounded-lg bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition-colors w-full sm:w-auto">
            <Eye size={14} />
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;