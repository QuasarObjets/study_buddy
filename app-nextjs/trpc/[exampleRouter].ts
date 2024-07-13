// File: /mi-aplicacion-de-estudio/app-nextjs/trpc/[exampleRouter].ts

// Este archivo define un ejemplo de router utilizando tRPC.
// Aquí se definen los endpoints y las funciones para manejar las solicitudes.

import { createRouter } from 'trpc';
import { z } from 'zod';

const router = createRouter()
  .query('exampleQuery', {
    input: z.string(),
    resolve: async ({ input }) => {
      // Lógica para manejar la consulta
      return `Ejemplo de consulta con input: ${input}`;
    },
  })
  .mutation('exampleMutation', {
    input: z.string(),
    resolve: async ({ input }) => {
      // Lógica para manejar la mutación
      return `Ejemplo de mutación con input: ${input}`;
    },
  });

export default router;
