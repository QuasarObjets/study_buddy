# Componentes

Esta carpeta contiene los componentes de la aplicación React Native. Los componentes son elementos reutilizables que se utilizan para construir la interfaz de usuario de la aplicación.

## Estructura de archivos

- `Componente1.tsx`: Este archivo contiene el código del Componente 1.
- `Componente2.tsx`: Este archivo contiene el código del Componente 2.
- ...

## Uso

Para utilizar un componente en la aplicación, simplemente importa el componente en el archivo donde lo necesites y úsalo como cualquier otro componente de React.

```tsx
import React from 'react';
import { Componente1 } from './Componente1';

const MiPantalla: React.FC = () => {
  return (
    <View>
      <Componente1 />
    </View>
  );
};

export default MiPantalla;
```

Recuerda importar los componentes necesarios y utilizarlos en tu aplicación según tus necesidades.

Si tienes alguna pregunta adicional, no dudes en hacerla.