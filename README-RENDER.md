# Despliegue en Render

Este documento explica cómo desplegar el backend en Render.

## Configuración en Render

### 1. Crear un nuevo servicio Web en Render

1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Click en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub/GitLab

### 2. Configuración del servicio

- **Name**: `whatsapp-crm-backend` (o el nombre que prefieras)
- **Environment**: `Node`
- **Build Command**: `npm ci && npx prisma generate && npm run build`
- **Start Command**: `npm run start:prod`
- **Root Directory**: `backend` (si tu repo tiene frontend y backend)

### 3. Variables de Entorno

Configura las siguientes variables de entorno en Render:

#### Requeridas:
- `DATABASE_URL`: URL de tu base de datos PostgreSQL en Render
- `JWT_SECRET`: Una cadena secreta aleatoria para JWT (genera una nueva)
- `FRONTEND_URL`: URL de tu frontend (ej: `https://tu-frontend.onrender.com`)
- `NODE_ENV`: `production`
- `PORT`: `9090` (Render lo configura automáticamente, pero puedes especificarlo)

#### Opcionales:
- `OPENAI_API_KEY`: Tu clave de API de OpenAI (si usas OpenAI)

### 4. Base de Datos PostgreSQL

1. En Render, crea un nuevo servicio "PostgreSQL"
2. Copia la "Internal Database URL" o "External Database URL"
3. Úsala como `DATABASE_URL` en las variables de entorno del servicio web

### 5. Migraciones de Base de Datos

**IMPORTANTE**: Las migraciones se ejecutan automáticamente al iniciar la aplicación en producción.

El `PrismaService` ejecuta `prisma migrate deploy` automáticamente cuando `NODE_ENV=production`, por lo que no necesitas ejecutarlas manualmente.

Si necesitas ejecutarlas manualmente (por ejemplo, para debugging), puedes usar el shell de Render:

```bash
npm run migrate:deploy
```

O directamente:

```bash
npx prisma migrate deploy
```

### 6. Almacenamiento de Sesiones de WhatsApp

⚠️ **IMPORTANTE**: Las sesiones de WhatsApp se guardan en el directorio `sessions/`. 

En Render, el sistema de archivos es efímero, lo que significa que:
- Las sesiones se perderán cuando el servicio se reinicie
- Necesitarás escanear el QR cada vez que se reinicie

**Soluciones posibles**:
1. Usar un servicio de almacenamiento persistente (S3, etc.)
2. Configurar un volumen persistente en Render (si está disponible)
3. Modificar el código para guardar sesiones en la base de datos

### 7. Archivos Estáticos

Los archivos en `uploads/` también se perderán en reinicios. Considera usar un servicio de almacenamiento en la nube (S3, Cloudinary, etc.).

## Comandos Útiles

### Ver logs en Render
Los logs están disponibles en el dashboard de Render.

### Ejecutar migraciones manualmente
Si necesitas ejecutar migraciones manualmente, puedes usar el shell de Render o conectarte via SSH.

### Crear usuario administrador
Después del despliegue, puedes crear un admin ejecutando:
```bash
npm run create-admin
```

## Notas Importantes

1. **Puerto**: Render asigna automáticamente el puerto. Asegúrate de que tu código use `process.env.PORT`.

2. **CORS**: Asegúrate de que `FRONTEND_URL` esté configurado correctamente para permitir las peticiones del frontend.

3. **WebSockets**: Render soporta WebSockets, pero asegúrate de que la configuración esté correcta.

4. **Health Check**: Considera agregar un endpoint `/health` para verificar que el servicio está funcionando.

5. **Auto-Deploy**: Render puede configurarse para hacer auto-deploy en cada push a la rama principal.

## Troubleshooting

### Error: "Cannot find module"
- Asegúrate de que `postinstall` script esté en package.json
- Verifica que todas las dependencias estén en `dependencies` y no solo en `devDependencies`

### Error: "Prisma Client not generated"
- Verifica que `npx prisma generate` se ejecute en el build command

### Error: "Database connection failed"
- Verifica que `DATABASE_URL` esté correctamente configurada
- Asegúrate de que la base de datos esté accesible desde el servicio web

### Sesiones de WhatsApp se pierden
- Esto es esperado en Render debido al sistema de archivos efímero
- Considera implementar almacenamiento persistente para las sesiones

