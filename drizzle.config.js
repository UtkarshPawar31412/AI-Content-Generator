/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:TrZWA2NuwhE0@ep-nameless-shape-a5wgq2ea.us-east-2.aws.neon.tech/AI-CONTENT-GENERATOR?sslmode=require',
    }
  };