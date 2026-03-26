import React from "react";
import "./DatesPricing.css";
import { IoCalendarClearOutline } from "react-icons/io5";


const DatesPricing = () => {
  return (
    <section className="dates-section">
      <div className="container">
        <p className="sub-heading">RESERVE YOUR JOURNEY</p>
        <h2 className="main-heading">Dates & Pricing</h2>

        <p className="description">
          Select your preferred departure date below. All prices are per person
          based on double occupancy and include accommodations, meals,
          excursions, and gratuities.
        </p>

        {/* Availability Legend */}
        <div className="legend">
          <div className="legend2">
          <span><span className="dot available"></span> Available</span>
          <span><span className="dot limited"></span> Limited Availability</span>
          <span><span className="dot sold"></span> Sold Out / Waitlist</span>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>DEPARTURE</th>
                <th>STATUS</th>
                <th>OCEAN VIEW SUITE</th>
                <th>DELUXE SUITE</th>
                <th>OWNER'S SUITE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  May 10, 2026 - May 18, 2026
                  <div className="tag">Early Bird - Save 10%</div>
                </td>
                <td><span className="badge available">Available</span></td>
                <td>$12,495</td>
                <td>$15,995</td>
                <td>$21,995</td>
                <td><button className="reserve-btn">Reserve</button></td>
              </tr>

              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  May 24, 2026 - Jun 1, 2026
                </td>
                <td><span className="badge available">Available</span></td>
                <td>$13,495</td>
                <td>$16,995</td>
                <td>$22,995</td>
                <td><button className="reserve-btn">Reserve</button></td>
              </tr>

              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  Jun 7, 2026 - Jun 15, 2026
                </td>
                <td><span className="badge available">Available</span></td>
                <td>$14,495</td>
                <td>$17,995</td>
                <td>$23,995</td>
                <td><button className="reserve-btn">Reserve</button></td>
              </tr>

              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  Jun 21, 2026 - Jun 29, 2026
                  <div className="tag">Peak Season</div>
                </td>
                <td><span className="badge limited">Limited</span></td>
                <td>$14,995</td>
                <td>$18,495</td>
                <td>$24,495</td>
                <td><button className="reserve-btn">Reserve</button></td>
              </tr>

              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  Sep 6, 2026 - Sep 14, 2026
                  <div className="tag">Harvest Season</div>
                </td>
                <td><span className="badge available">Available</span></td>
                <td>$13,995</td>
                <td>$17,495</td>
                <td>$23,495</td>
                <td><button className="reserve-btn">Reserve</button></td>
              </tr>

              <tr>
                <td>
                  <IoCalendarClearOutline className="calendar-icon" />
                  Sep 20, 2026 - Sep 28, 2026
                </td>
                <td><span className="badge sold">Sold Out</span></td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td><button className="waitlist-btn">Waitlist</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Notes */}
        <div className="pricing-note">
          <p><strong>Pricing Notes:</strong> All rates are per person, double occupancy. Single supplement available upon request. Prices subject to availability at time of booking.</p>
          <p><strong>Early Booking:</strong> Reserve 6+ months in advance to receive our early booking discount of 10% on select departures.</p>
        </div>

        <div className="bottom-section">
          <p>Need help choosing the perfect departure?</p>
          <button className="specialist-btn">Speak with a Journey Specialist →</button>
        </div>
      </div>
    </section>
  );
};

export default DatesPricing;
