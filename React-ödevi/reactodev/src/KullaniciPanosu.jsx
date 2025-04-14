import React from 'react';
import KullaniciKart from './KullaniciKart';

const KullaniciPanosu = () => {
  const kullanicilar = [
    {
      id: 1,
      ad: 'Ayberk',
      yas: 24,
      aktif: true,
      hobiler: ['Kodlama', 'Satranç', 'Yürüyüş']
    },
    {
      id: 2,
      ad: 'Mehmet',
      yas: 29,
      aktif: false,
      hobiler: ['Resim', 'Yüzme']
    },
    {
      id: 3,
      ad: 'Mert',
      yas: 31,
      aktif: true,
      hobiler: ['Kitap Okumak', 'Müzik Dinlemek']
    }
  ];

  return (
    <div>
      {kullanicilar.map((kullanici) => (
        <KullaniciKart key={kullanici.id} kullanici={kullanici} />
      ))}
    </div>
  );
};

export default KullaniciPanosu;