import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <div class="h-screen bg-slate-700">
      <Navbar />
      <div className="mt-20 ml-48 text-slate-100">
        <span class="text-3xl font-bold">Pricing:</span>
        <table class="table-auto w-1/3 mt-16 border-2 p-5 text-center">
          <thead>
            <tr>
              <th>Service</th>
              <th>Locations</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hyderabad Tour</td>
              <td>Charminar, Necklace Road</td>
              <td>1200/-</td>
            </tr>
            <tr>
              <td>Himachal Pradesh</td>
              <td>Shimla, Manali, Dalhousie</td>
              <td>32000/-</td>
            </tr>
            <tr>
              <td>Gujarat</td>
              <td>Rani Ki Vav, Dholavira, Lothal</td>
              <td>13000/-</td>
            </tr>
            <tr>
              <td>Andaman and Nicobar</td>
              <td>Ross Insland, Cellular Jail, Makruzz</td>
              <td>9000/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
