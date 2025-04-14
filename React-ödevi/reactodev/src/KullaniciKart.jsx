import React, { useState } from 'react';
import './App.css';

const KullaniciKart = ({ kullanici }) => {
  const { ad, yas, aktif, hobiler } = kullanici;
  const [detayGoster, setDetayGoster] = useState(false);

  const toggleDetay = () => {
    setDetayGoster(!detayGoster);
  };

  return (
    <div className="kullanici-kart">
      <h2>{ad} ({yas} yaşında)</h2>
      <p>
        Durum:{' '}
        <span style={{ color: aktif ? 'green' : 'red' }}>
          {aktif ? 'Aktif' : 'Pasif'}
        </span>
      </p>

      <button onClick={toggleDetay}>
        {detayGoster ? 'Detayları Gizle' : 'Göster Detay'}
      </button>

      {detayGoster && (
        <ul>
          {hobiler.map((hobi, index) => (
            <li key={index}>{hobi}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KullaniciKart;
