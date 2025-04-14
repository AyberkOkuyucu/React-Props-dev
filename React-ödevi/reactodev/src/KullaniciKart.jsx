import React, { useState } from 'react';
import './App.css';

// KullaniciKart bileşeni, props olarak bir kullanıcı nesnesi alır
const KullaniciKart = ({ kullanici }) => {
  // Kullanıcı bilgilerini props içinden çıkarıyoruz
  const { ad, yas, aktif, hobiler } = kullanici;

  // Detayların görünüp görünmeyeceğini tutan state
  const [detayGoster, setDetayGoster] = useState(false);

  // Butona tıklanınca detayları göster/gizle
  const toggleDetay = () => {
    setDetayGoster(!detayGoster);
  };

  return (
    <div className="kullanici-kart">
      {/* Kullanıcının adı ve yaşı */}
      <h2>{ad} ({yas} yaşında)</h2>

      {/* Kullanıcının aktif/pasif durumu */}
      <p>
        Durum:{' '}
        <span style={{ color: aktif ? 'green' : 'red' }}>
          {aktif ? 'Aktif' : 'Pasif'}
        </span>
      </p>

      {/* Detayları göster/gizle butonu */}
      <button onClick={toggleDetay}>
        {detayGoster ? 'Detayları Gizle' : 'Göster Detay'}
      </button>

      {/* Eğer detaylar gösteriliyorsa hobileri listele */}
      {detayGoster && (
        <ul>
          {hobiler.map((hobi, index) => (
            <li key={index}>{hobi}</li> // Her bir hobiyi listeye ekle
          ))}
        </ul>
      )}
    </div>
  );
};

export default KullaniciKart; // Bileşeni dışa aktar
