/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html', 
    'role.html',  
    'login.html', 
    'produk.html', 
    'toko.html', 
    'produkinfo.html', 
    'manggala.html', 
    'bsp.html', 
    'admin.html', 
    'profilcard.html',
    'daftaralamat.html',
    'pembayaran.html',
    'rekeningbank.html',
    'notifikasi.html',
    'modetampilan.html',
    'keamanan.html',
  ], 
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#082F49',
        dashboard: 'D9D9D9',
        dark: '#020617',
        hover: '#7DD3FC',
        loginregister: '#93c5fd',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

