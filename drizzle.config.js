/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:HSwsV0O4Lrfp@ep-plain-glitter-a5047ie1.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
  };
  