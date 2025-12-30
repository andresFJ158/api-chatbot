"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const email = process.env.ADMIN_EMAIL || 'admin@example.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    const name = process.env.ADMIN_NAME || 'Administrador';
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await prisma.agent.upsert({
        where: { email },
        update: {},
        create: {
            email,
            password: hashedPassword,
            name,
            role: 'admin',
        },
    });
    console.log('✅ Admin creado exitosamente:');
    console.log(`   Email: ${admin.email}`);
    console.log(`   Nombre: ${admin.name}`);
    console.log(`   Rol: ${admin.role}`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=create-admin.js.map