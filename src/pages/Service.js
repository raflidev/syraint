import React from 'react'
import { Link, useParams } from 'react-router-dom';

const service = [
  {
    nama: "Air Freight",
    slug: "air-feight"
  },
  {
    nama: "Sea Freight",
    slug: "sea-freight"
  },
  {
    nama: "Custom Brokerage",
    slug: "custom-brokerage"
  },
  {
    nama: "Inland Service",
    slug: "inland-service"
  },
];

function Service() {
  const {slug} = useParams();
  const data = service.find((item) => item.slug === slug);
  return (
    <div>
      <div className='py-3 bg-gold px-10'>
        <Link to={`/`} className="flex space-x-2 items-center hover:underline">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div>
            Back to Home
          </div>
        </Link>
      </div>
      <div className='flex bg-gold text-center py-10 justify-center font-montserrat font-bold text-4xl'>{data.nama}</div>
      <div className='px-20 mt-10'>
        {
          data.nama === "Air Freight" && (
            <div>
              <ul className='list-decimal'>
                <li>
                  Direct Air Freight - We offer direct air freight services for time-sensitive shipments.
                </li>
                <li>
                  Consolidate Air Freight - We provide consolidate air freight services for cost-effective shipping options.
                </li>
                <li>
                  Door to door Services - We offer door-to-door pick up and delivery services for air freight shipments.
                </li>
                <li>
                  Exim Custom Clearance - Our team of experts handle customs clearance for imports and exports.
                </li>
                <li>
                  Exim Documentation - We handle all export and import documentation, including air waybills and commercial invoices.
                </li>
              </ul>
            </div>
          )
        }

        {
          data.nama === "Sea Freight" && (
            <div>
              <ul className='list-decimal'>
                <li>
                  FCL or LCL Shipment - We offer full container load (FCL) and less than container load(LCL) shipping options.
                </li>
                <li>
                  Reefer Shipment - We have the capability to handle refrigerated cargo, ensuring proper temperature control during transportation.
                </li>
                <li>
                  Exim Documents - We handle all export and import documentation, including bills of lading, commercial invoices, and packing lists.
                </li>
                <li>
                  Exim Customs Clearance - Our team of experts handle customs clearance for imports and exports.
                </li>
                <li>
                  Manage Ocean Carriers - We work with a network of ocean carriers to provide our clients with the best shipping options.
                </li>
                <li>
                  Container Transport - We provide container transport for sea freight shipments.
                </li>
                <li>
                  Door Pick up and Delivery - We offer door-to-door pick up and delivery services for sea freight shipments.
                </li>
              </ul>
            </div>
          )
        }

        {
          data.nama === "Custom Brokerage" && (
            <div>
              <div>Custom Brokerage - Our team of experts handle all customs clearance and documentation for imports and exports.</div>

              <div>
                <div>
                  Project - Heavy EQP and Oversize - We have the expertise and equipment to handle large and heavy equipment for projects.
                </div>
                <div>
                  Local Transportation - We offer local transportation services for domestic delivery and logistics.
                </div>
                <div>
                  Household Removal - We provide professional and efficient household removal services.
                </div>
                <div>
                  Domestic Physical Distribution and Logistics - We handle domestic logistics and distribution for businesses.
                </div>
`
              </div>
            </div>
          )
        }

        {
          data.nama === "Inland Service" && (
            <div>
              <ul className='list-decimal'>
                <li>
                  Containerized Cargo Transportation: Provide transportation for import-export and inter-island containerized cargo from ports to designated warehouses or factories for cargo owners.
                </li>
                <li>
                  Direct Shipper Cargo Transportation: Offer truck rental for cargo transportation from factories to warehouses or other factories, with options for trip-based, tonnage-based, or time-based rentals.
                </li>
                <li>
                  Empty Container Reposition: Transport empty containers between container depots and shipping lines.
                </li>
                <li>
                  Cargo Distribution: Assist in supply chain management by transporting products from main warehouses to smaller warehouses and retail stores.
                </li>
                <li>
                  Project Cargo Transportation: Handle transportation of infrastructure project cargo from ships, factories, and warehouses to project locations according to customer requests.
                </li>
                <li>
                  Intra Port Haulage Service: Provide stevedoring services in the port area using owned vessels and operating terminal tractors for port operators. Additionally, this subsidiary offers. maintenance, repair, and leasing of terminal chassis (port trailers) as part of its overall business activities.
                </li>
              </ul>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default Service