# Documento de Lógica: Proyecto "Regalos-E" (Prototipo Scratch)

## 1. Introducción
Este documento detalla la lógica de funcionamiento del proyecto "Regalos-E", una plataforma interactiva de personalización de regalos. El propósito de esta versión en Scratch es servir como **Prueba de Concepto (PoC)** para definir la experiencia de usuario antes de su implementación en una página web.

## 2. Definición del Escenario
El entorno en Scratch se divide en tres áreas principales:
* **Zona de Catálogo:** Espacio donde se despliegan los objetos (productos) disponibles.
* **Caja de Regalos:** Área objetivo (zona de *drop*) donde el usuario deposita los productos.
* **Interfaz de Control:** Botones para "Finalizar Compra" y "Reiniciar".

## 3. Lógica de Interacción (Pseudocódigo Scratch)

### 3.1. Funcionalidad de Arrastrar y Soltar (Drag & Drop)
Para cada objeto (producto):
1.  **Al hacer clic en el objeto:**
    * Cambiar a modo "seguimiento del ratón".
    * Bucle: `si ratón presionado?` -> `ir a posición de puntero`.
2.  **Al soltar el objeto:**
    * `si tocando "Caja de Regalos"?`
        * Anclar posición dentro de la caja.
        * Añadir el ID del producto a la `Lista_Regalo`.
    * `si no`
        * Devolver el objeto a su posición original en el catálogo.

### 3.2. Lógica de Validación y Finalización
Al presionar el botón "Finalizar Regalo":
1.  **Validación:**
    * `si longitud de "Lista_Regalo" > 0`
        * Ocultar catálogo.
        * Mostrar animación de "Empaquetando".
        * Transmitir mensaje: `mostrar_resultado`.
    * `si no`
        * Mostrar alerta: "¡Tu caja está vacía!".

### 3.3. Generación del Resultado
1.  **Al recibir `mostrar_resultado`:**
    * La caja cambia de disfraz (abierta a cerrada con lazo).
    * Se muestra un mensaje final: "¡Tu regalo está listo para ser enviado!".
    * Se habilita el botón "Enviar" (que simula la disposición del pedido).

## 4. Variables Clave
* `Lista_Regalo`: Almacena los nombres o IDs de los objetos seleccionados.
* `Estado_Caja`: Indica si la caja está abierta (para recibir) o cerrada (finalizada).

## 5. Notas para la Migración Web
* La lógica de *drag & drop* en web se implementará utilizando la **API HTML5 Drag and Drop** o librerías como *Interact.js*.
* La `Lista_Regalo` de Scratch se convertirá en un **Array en JavaScript** que se enviará al servidor mediante `fetch()` o `Axios` para procesar el pedido real.
