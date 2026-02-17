import React, { useState } from 'react';

// Sold properties data with images
const soldProperties = [
  { id: 1, address: "8 Cinderella Circle", city: "Little Rock", zip: "72204", sqft: "1,102", beds: 3, baths: 2, soldDate: "Jan 21, 2026", image: "8 Cinderella Circle.jpg" },
  { id: 2, address: "3501 Katherine St", city: "Little Rock", zip: "72204", sqft: "1,141", beds: 3, baths: 2, soldDate: "Jan 17, 2026", image: "3501 Katherine St.jpg" },
  { id: 3, address: "1 Winchester Dr", city: "Little Rock", zip: "72209", sqft: "1,175", beds: 4, baths: 1, soldDate: "May 14, 2025", image: "1 Winchester Dr.jpg" },
  { id: 4, address: "13924 Shamrock Dr", city: "Shannon Hills", zip: "72103", sqft: "1,196", beds: 3, baths: 1, soldDate: "Apr 26, 2025", image: "13924 Shamrock Dr.jpg" },
  { id: 5, address: "5 Rolling Ln", city: "Little Rock", zip: "72209", sqft: "1,275", beds: 3, baths: 1, soldDate: "Apr 25, 2025", image: "5 Rolling Ln.jpg" },
  { id: 6, address: "4516 Frank St", city: "North Little Rock", zip: "72118", sqft: "1,960", beds: 4, baths: 2, soldDate: "Feb 14, 2025", image: "4516 Frank St.jpg" },
  { id: 7, address: "8721 Mize Rd", city: "Little Rock", zip: "72209", sqft: "1,556", beds: 4, baths: 2, soldDate: "Feb 6, 2025", image: "8721 Mize Rd.jpg" },
  { id: 8, address: "720 Forest Ln", city: "Benton", zip: "72019", sqft: "1,604", beds: 3, baths: 1, soldDate: "Jan 21, 2025", image: "720 Forest Ln.jpg" },
  { id: 9, address: "219 Briarpatch Ln", city: "Jacksonville", zip: "72076", sqft: "1,238", beds: 3, baths: 1, soldDate: "Nov 25, 2024", image: "219 Briarpatch Ln.jpg" },
  { id: 10, address: "4923 Guyse Rd", city: "Little Rock", zip: "72206", sqft: "1,635", beds: 3, baths: 2, soldDate: "Oct 18, 2024", image: "4923 Guyse Rd.jpg" },
  { id: 11, address: "9407 Pennington Rd", city: "Little Rock", zip: "72206", sqft: "1,624", beds: 3, baths: 2, soldDate: "Oct 11, 2024", image: "9407 Pennington Rd.jpg" },
  { id: 12, address: "1921 E 38th St", city: "Little Rock", zip: "72206", sqft: "884", beds: 3, baths: 1, soldDate: "Sep 18, 2024", image: "1921 E 38th St.jpg" },
  { id: 13, address: "509 Vine St", city: "Jacksonville", zip: "72076", sqft: "1,499", beds: 3, baths: 2, soldDate: "Sep 4, 2024", image: "509 Vine St.jpg" },
  { id: 14, address: "925 Greenlea Dr", city: "North Little Rock", zip: "72117", sqft: "754", beds: 2, baths: 1, soldDate: "Aug 24, 2024", image: "925 Greenlea Dr.jpg" },
  { id: 15, address: "10212 Stardust Trail", city: "Little Rock", zip: "72209", sqft: "1,326", beds: 4, baths: 2, soldDate: "Aug 15, 2024", image: "10212 Stardust Tr.jpg" },
  { id: 16, address: "8 Villas Dr", city: "Sherwood", zip: "72120", sqft: "1,751", beds: 3, baths: 2, soldDate: "Jul 26, 2024", image: "8 Villas Dr.jpg" },
  { id: 17, address: "216 Poplar St", city: "Jacksonville", zip: "72076", sqft: "1,306", beds: 3, baths: 2, soldDate: "Jul 23, 2024", image: "216 Poplar St.jpg" },
  { id: 18, address: "87 Deer Run Dr", city: "Little Rock", zip: "72206", sqft: "1,164", beds: 3, baths: 2, soldDate: "Jul 11, 2024", image: "87 Deer Run Dr.jpg" },
  { id: 19, address: "3621 Potter St", city: "Little Rock", zip: "72204", sqft: "1,392", beds: 3, baths: 2, soldDate: "Jun 19, 2024", image: "3621 Potter St.jpg" },
  { id: 20, address: "35 Brookview Dr", city: "Little Rock", zip: "72209", sqft: "1,695", beds: 3, baths: 2, soldDate: "Jun 18, 2024", image: "35 Brookview Dr.jpg" },
  { id: 21, address: "3308 Ludwig St", city: "Little Rock", zip: "72204", sqft: "2,262", beds: 4, baths: 2, soldDate: "May 31, 2024", image: "3308 Ludwig St.jpg" },
  { id: 22, address: "917 W 44th St", city: "North Little Rock", zip: "72118", sqft: "1,414", beds: 2, baths: 2, soldDate: "May 17, 2024", image: "917 W 44th St.jpg" },
  { id: 23, address: "9407 Copeland Ln", city: "North Little Rock", zip: "72118", sqft: "1,150", beds: 3, baths: 1, soldDate: "May 13, 2024", image: "9407 Copeland Ln.jpg" },
  { id: 24, address: "15021 Atwood Cove", city: "Little Rock", zip: "72206", sqft: "1,568", beds: 3, baths: 2, soldDate: "May 4, 2024", image: "15021 Atwood Cove.jpg" },
  { id: 25, address: "1013 W Center Ave", city: "Searcy", zip: "72143", sqft: "1,050", beds: 2, baths: 1, soldDate: "May 3, 2024", image: "1013 W Center Ave.jpg" },
  { id: 26, address: "326 W Pine St", city: "Benton", zip: "72015", sqft: "1,192", beds: 3, baths: 2, soldDate: "May 2, 2024", image: "326 W Pine St.jpg" },
  { id: 27, address: "29 Harrow Dr", city: "Little Rock", zip: "72209", sqft: "875", beds: 3, baths: 1, soldDate: "Apr 20, 2024", image: "29 Harrow Dr.jpg" },
  { id: 28, address: "14 Point O Woods Dr", city: "Little Rock", zip: "72204", sqft: "1,189", beds: 3, baths: 2, soldDate: "Apr 16, 2024", image: "14 Point O Woods.jpg" },
  { id: 29, address: "4824 AR Hwy 294", city: "Jacksonville", zip: "72076", sqft: "1,898", beds: 3, baths: 2, soldDate: "Apr 9, 2024", image: "4824 AR Hwy 294.jpg" },
  { id: 30, address: "81 Deer Run Dr", city: "Little Rock", zip: "72206", sqft: "1,268", beds: 4, baths: 2, soldDate: "Apr 5, 2024", image: "81 Deer Run Dr.jpg" },
  { id: 31, address: "2218 N 27th St", city: "Fort Smith", zip: "72904", sqft: "1,432", beds: 4, baths: 2, soldDate: "Apr 4, 2024", image: "2218 N 27th St.jpg" },
  { id: 32, address: "9418 Southboro Dr", city: "Little Rock", zip: "72209", sqft: "1,246", beds: 3, baths: 2, soldDate: "Mar 30, 2024", image: "9418 Southboro Dr.jpg" },
  { id: 33, address: "6601 Tulip Dr", city: "Little Rock", zip: "72209", sqft: "1,129", beds: 3, baths: 2, soldDate: "Mar 25, 2024", image: "6601 Tulip Dr.jpg" },
  { id: 34, address: "12281 Maryland Pl", city: "Sherwood", zip: "72120", sqft: "1,324", beds: 3, baths: 2, soldDate: "Dec 29, 2023", image: "12281 Maryland Pl.jpg" },
  { id: 35, address: "201 E 17th St", city: "North Little Rock", zip: "72114", sqft: "1,510", beds: 4, baths: 2, soldDate: "Dec 21, 2023", image: "201 E 17th St.jpg" },
  { id: 36, address: "1912 Romine Rd", city: "Little Rock", zip: "72205", sqft: "1,874", beds: 4, baths: 3, soldDate: "Dec 15, 2023", image: "1912 Romine Rd.jpg" },
  { id: 37, address: "33 Allyson Circle", city: "Little Rock", zip: "72209", sqft: "1,457", beds: 3, baths: 2, soldDate: "Dec 10, 2023", image: "33 Allyson Circle.jpg" },
  { id: 38, address: "2618 Vancouver Dr", city: "Little Rock", zip: "72204", sqft: "1,356", beds: 3, baths: 1.5, soldDate: "Nov 21, 2023", image: "2618 Vancouver Dr.jpg" },
  { id: 39, address: "7 Meadowbrook Dr", city: "Little Rock", zip: "72205", sqft: "2,153", beds: 4, baths: 2, soldDate: "Nov 21, 2023", image: "7 Meadowbrook Dr.jpg" },
  { id: 40, address: "8905 Longacre Dr", city: "Little Rock", zip: "72205", sqft: "1,274", beds: 3, baths: 1, soldDate: "Nov 21, 2023", image: "8905 Longacre Dr.jpg" },
  { id: 41, address: "11 Wanda Ln", city: "Little Rock", zip: "72209", sqft: "1,455", beds: 4, baths: 2, soldDate: "Nov 4, 2023", image: "11 Wanda Ln.jpg" },
  { id: 42, address: "39 Southern Oaks Dr", city: "Little Rock", zip: "72209", sqft: "1,380", beds: 3, baths: 1.5, soldDate: "Oct 27, 2023", image: "39 Southern Oaks Dr.jpg" },
  { id: 43, address: "8 Lamont Dr", city: "Little Rock", zip: "72209", sqft: "1,008", beds: 3, baths: 2, soldDate: "Oct 23, 2023", image: "8 Lamont Dr.jpg" },
  { id: 44, address: "1 Hatfield Dr", city: "Little Rock", zip: "72209", sqft: "1,059", beds: 2, baths: 1, soldDate: "Oct 17, 2023", image: "1 Hatfield Dr.jpg" },
  { id: 45, address: "300 Brookpark Dr", city: "Little Rock", zip: "72205", sqft: "1,454", beds: 3, baths: 2, soldDate: "Oct 14, 2023", image: "300 Brookpark Dr.jpg" },
  { id: 46, address: "121 Blenden Dr", city: "North Little Rock", zip: "72117", sqft: "1,470", beds: 3, baths: 1.5, soldDate: "Sep 28, 2023", image: "121 Blenden Drive.jpg" },
  { id: 47, address: "3912 Potter St", city: "Little Rock", zip: "72204", sqft: "1,814", beds: 3, baths: 2, soldDate: "Sep 5, 2023", image: "3912 Potter St.jpg" },
  { id: 48, address: "11 W Windsor Dr", city: "Little Rock", zip: "72209", sqft: "1,195", beds: 4, baths: 1, soldDate: "Aug 3, 2023", image: "11 W Windsor Drive.jpg" },
  { id: 49, address: "9824 Mabelvale Main St", city: "Mabelvale", zip: "72103", sqft: "1,024", beds: 2, baths: 1, soldDate: "Jul 20, 2023", image: "9824 Mabelvale Main.jpg" },
  { id: 50, address: "5809 Wisteria Court", city: "North Little Rock", zip: "72118", sqft: "1,225", beds: 3, baths: 2, soldDate: "Jul 2, 2023", image: "5809 Wisteria.jpg" },
];

// Get unique cities for filter
const cities = [...new Set(soldProperties.map(p => p.city))].sort();

export default function SoldPropertiesPage() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProperties = selectedCity === 'All' 
    ? soldProperties 
    : soldProperties.filter(p => p.city === selectedCity);

  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 12);

  // Stats
  const totalSold = soldProperties.length;
  const citiesServed = cities.length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-950 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <a href="#/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-4">
            ← Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-bold">Our Sold Homes</h1>
          <p className="text-blue-200 mt-2">Real results for real families across Central Arkansas</p>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-red-600">{totalSold}</div>
              <div className="text-slate-600 mt-1">Homes Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-950">{citiesServed}</div>
              <div className="text-slate-600 mt-1">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-950">2023-2026</div>
              <div className="text-slate-600 mt-1">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white border-b border-slate-200 py-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-slate-600 font-medium">Filter by city:</span>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => { setSelectedCity('All'); setShowAll(false); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCity === 'All' 
                    ? 'bg-blue-950 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({soldProperties.length})
              </button>
              {cities.map(city => {
                const count = soldProperties.filter(p => p.city === city).length;
                return (
                  <button
                    key={city}
                    onClick={() => { setSelectedCity(city); setShowAll(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCity === city 
                        ? 'bg-blue-950 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {city} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProperties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300">
                <img 
                  src={`/${property.image}`}
                  alt={property.address}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 items-center justify-center hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SOLD
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                  {property.soldDate}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-5">
                <h3 className="font-bold text-blue-950 text-lg mb-1">{property.address}</h3>
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                  📍 {property.city}, AR {property.zip}
                </div>

                <div className="flex items-center gap-4 text-slate-600 text-sm">
                  <span>🛏 {property.beds} bed</span>
                  <span>🚿 {property.baths} bath</span>
                  <span>📐 {property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredProperties.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Show All {filteredProperties.length} Properties ↓
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Turn to Get the Keys</h2>
          <p className="text-blue-200 text-lg mb-8">
            Join the {totalSold} families who've already achieved homeownership through owner financing.
          </p>
          <a 
            href="#/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition shadow-lg"
          >
            Schedule a Showing Today
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 REI REALTY LLC. All rights reserved.</p>
          <p className="mt-2">
            <a href="#/" className="hover:text-white transition">← Back to AmericanDreamCasa.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

