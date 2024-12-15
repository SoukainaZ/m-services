import { Link, useLocation } from "react-router-dom";
import { Users, Car, UserPlus, CarFront } from "lucide-react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-purple-900" : "";
  };

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-gray-100 font-bold text-xl"
            >
              <CarFront className="h-6 w-6 mr-2 text-purple-400" />
              Zaid Auto
            </Link>

            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/clients"
                className={`flex items-center text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors ${isActive(
                  "/clients"
                )}`}
              >
                <Users className="h-4 w-4 mr-2" />
                Clients
              </Link>
              <Link
                to="/voitures"
                className={`flex items-center text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors ${isActive(
                  "/voitures"
                )}`}
              >
                <Car className="h-4 w-4 mr-2" />
                Voitures
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/add-client"
              className={`flex items-center text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors ${isActive(
                "/add-client"
              )}`}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Nouveau Client
            </Link>
            <Link
              to="/add-voiture"
              className={`flex items-center text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors ${isActive(
                "/add-voiture"
              )}`}
            >
              <CarFront className="h-4 w-4 mr-2" />
              Nouvelle Voiture
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
