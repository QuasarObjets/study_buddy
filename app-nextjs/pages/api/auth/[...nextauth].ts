import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Agrega aquí otros proveedores de autenticación, como Google, Facebook, etc.
  ],
  // Agrega aquí cualquier configuración adicional que necesites para NextAuth.js
};

export default (req, res) => NextAuth(req, res, options);