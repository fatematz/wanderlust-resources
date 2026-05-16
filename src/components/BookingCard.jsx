"use client";

import { authClient } from "@/lib/auth-client";

const BookingCard = ({ destination }) => {
  const { price, departureDate, destinationName, imageUrl, country } =
    destination;

  const { data: session, isPending  } = authClient.useSession();
  const user = session?.user;
  // console.log("session", user);

  const handleBooking = async () => {


if (isPending) {
  alert("Please wait...");
  return;
}

if (!user) {
  alert("Please login first!");
  return;
}

    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: destination._id,
      destinationName,
      price,
      imageUrl,
      country,
    }

    // console.log( "bookingData",  bookingData)


    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })

    const data = await res.json();
    console.log("booked", data)

  };

  return (
    <div>
      <div className="w-full lg:w-[300px] xl:w-[340px]">
        <div className="border border-gray-200 p-6 sticky top-[90px]">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            Starting from
          </p>
          <p className="text-4xl font-bold text-[#15A1BF] mb-1">
            ${Number(price).toLocaleString()}
          </p>
          <p className="text-xs text-gray-400 mb-6">per person</p>

          {/* Date */}
          <div className="border border-gray-200 px-4 py-3 text-sm text-gray-500 mb-4">
            {departureDate
              ? new Date(departureDate).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              : "05/15/2026"}
          </div>

          {/* Book Button */}
          <button onClick={handleBooking} className="w-full bg-[#15A1BF] text-white py-3.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1191ac] transition-colors">
            Book Now
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          {/* Perks */}
          <div className="mt-4 space-y-2">
            {[
              "Free cancellation up to 7 days",
              "Travel insurance included",
              "24/7 customer support",
            ].map((perk, i) => (
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
                <span className="text-xs text-gray-500">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
