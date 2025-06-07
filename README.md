# Tienda online de tatuajes | Mawless Tattoo 💉🛒

Este proyecto es una aplicación de e-commerce desarrollada con React.js, simulando una tienda online de productos para tatuajes. Fue construido como parte del proyecto para la plataforma Coderhouse, sobre las bases de React con JavaScript, utilizando Firebase como backend para la gestión de productos y órdenes.

![image](/public/app-image.jpg)

### Instalación ⚙️

1.  **Clona el repositorio**:
    ```bash
    git clone [https://github.com/EliasMarrero23/Proyecto-ReactJS](https://github.com/EliasMarrero23/Proyecto-ReactJS)
    cd Proyecto-ReactJS
    ```

2.  **Configura Firebase:**
    Este proyecto ya incluye la configuración de Firebase directamente en `src/service/firebase.js`. Solo asegúrate de que el archivo exista con el siguiente contenido:

    ```javascript
    // src/service/firebase.js
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";

    // Configuración del Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyCc8EJbcfcNA717M1TJTu80jkff25JTxUU",
      authDomain: "mawless-tattoo.firebaseapp.com",
      projectId: "mawless-tattoo",
      storageBucket: "mawless-tattoo.firebasestorage.app",
      messagingSenderId: "1033555671244",
      appId: "1:1033555671244:web:709691617e61838b27aa69"
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);
    ```
    **Importante:** Asegúrate de que en tu consola de Firebase (`https://console.firebase.google.com/`) existan las colecciones `productos` (con tus ítems cargados) y `orders` en **Firestore Database**.

3.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    yarn install
    ```

4.  **Inicia la aplicación:**
    ```bash
    npm run dev
    # o si usas Yarn
    yarn dev
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:5173` (o un puerto similar).

### Versión Host 💻

Si deseas ver el proyecto online (cuando lo hayas desplegado), puedes ingresar al siguiente link: [Link a tu deploy aquí]()
*(Recuerda **actualizar este enlace** una vez que hayas desplegado tu aplicación en un servicio de hosting como Vercel, Netlify, Firebase Hosting, etc.)*

### Librerías utilizadas 📖

* **[React](https://react.dev/)**: Biblioteca principal para construir la interfaz de usuario.
* **[React Router DOM](https://reactrouter.com/en/main)**: Para la navegación declarativa dentro de la aplicación.
* **[Firebase](https://firebase.google.com/)**: Plataforma de desarrollo de Google utilizada como base de datos (Firestore) para productos y órdenes.
* **[React Hook Form](https://react-hook-form.com/)**: Para la gestión eficiente y validación de formularios.
* **[SweetAlert2](https://sweetalert2.github.io/)**: Para alertas y notificaciones personalizadas e interactivas.
* **[React Bootstrap](https://react-bootstrap.netlify.app/)**: Implementación de componentes de Bootstrap para React, utilizada para el styling y la responsividad.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de iconos populares para React.

---

**Desarrollado por Elias Marrero 😊**