import React from 'react';
import './OurPartners.css';
import Dangote from "../../assets/dangote.png"
import GTB from "../../assets/gtb.png"
import Andela from "../../assets/andela.png"
import Naija from "../../assets/Naija-brew.jfif"
import Paystack from "../../assets/paystack.png"
import Zenith from "../../assets/zenith.png"

const partners = [
  { name: 'Dangote Group', logo: Dangote, link: 'https://www.dangote.com' },
  { name: 'GTBank', logo: GTB, link: 'https://www.gtbank.com' },
  { name: 'Nigerian Breweries', logo: Naija, link: 'https://www.nbplc.com' },
  { name: 'Zenith Bank', logo: Zenith, link: 'https://www.zenithbank.com' },
  { name: 'Paystack', logo: Paystack, link: 'https://www.paystack.com' },
  { name: 'Andela', logo: Andela, link: 'https://www.andela.com' },
];

const OurPartners = () => (
  <section className="partner-section">
    <h2>Our Trusted Partners</h2>
    <div className="partner-grid">
      {partners.map((p, idx) => (
        <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="partner-card">
          <img src={p.logo} alt={p.name} />
        </a>
      ))}
    </div>
  </section>
);

export default OurPartners;
