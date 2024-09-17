import { envs } from "../config/envs";

export function generateCaseEmailTemplate(
  age: number,
  genre: string,
  lat: number,
  lng: number,
  symptoms: string
): string {
  const mapImageUrl = generateMapboxStaticImageURL(lat, lng);
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Detalles del Caso</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
              line-height: 1.6;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #f7c6c7; /* Borde de advertencia */
          }
          .header {
              background-color: #ff6f61; /* Color de advertencia */
              color: #ffffff;
              padding: 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 26px;
          }
          .content {
              padding: 20px;
          }
          .content p {
              margin: 12px 0;
              font-size: 16px;
          }
          .content p strong {
              color: #ff6f61; /* Color de advertencia para etiquetas */
          }
          .footer {
              background-color: #fff3e0; /* Fondo de advertencia */
              color: #777;
              padding: 15px;
              text-align: center;
              font-size: 14px;
          }
          .map-image {
              width: 100%;
              height: auto;
              border-radius: 8px;
              margin-top: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Detalles del Caso</h1>
          </div>
          <div class="content">
              <p><strong>Género:</strong> ${genre}</p>
              <p><strong>Edad:</strong> ${age}</p>
              <p><strong>Latitud:</strong> ${lat}</p>
              <p><strong>Longitud:</strong> ${lng}</p>
              <p><strong>Síntomas:</strong> ${symptoms}</p>
          </div>

          <div class="content">
            <img class="map-image" src="${mapImageUrl}" alt="Mapa de ubicación"/>
          </div>

          <div class="footer">
              <p>Este es un correo generado automáticamente. Por favor, no responda a este mensaje.</p>
          </div>
      </div>
  </body>
  </html>
  `;
}

export const generateMapboxStaticImageURL = (
  lat: number,
  lng: number
): string => {
  const accessToken = envs.MAPBOX_ACCESS_TOKEN;
  const zoom = 19;
  const width = 800;
  const height = 500;
  return `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l-embassy+f74e4e(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${accessToken}`;
};
