import { Client, Account, Databases, ID } from 'appwrite';

const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

// TODO: Replace with your actual Database ID and Collection IDs from Appwrite console or appwrite.json
export const APPWRITE_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'YOUR_DATABASE_ID'; 
export const PROFILES_COLLECTION_ID = process.env.NEXT_PUBLIC_PROFILES_COLLECTION_ID || 'YOUR_PROFILES_COLLECTION_ID';

if (!APPWRITE_ENDPOINT) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APPWRITE_ENDPOINT. Please set it in .env.local (e.g., https://cloud.appwrite.io/v1)');
}

if (!APPWRITE_PROJECT_ID) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_APPWRITE_PROJECT_ID. Please set it in .env.local');
}

if (APPWRITE_DATABASE_ID === 'YOUR_DATABASE_ID') {
  console.warn('Appwrite Config: NEXT_PUBLIC_APPWRITE_DATABASE_ID is not set or using placeholder. Update in .env.local or appwrite.ts for production.');
}

if (PROFILES_COLLECTION_ID === 'YOUR_PROFILES_COLLECTION_ID') {
  console.warn('Appwrite Config: NEXT_PUBLIC_PROFILES_COLLECTION_ID is not set or using placeholder. Update in .env.local or appwrite.ts for production.');
}


const client = new Client();

client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export { ID }; // Export ID for creating unique document IDs, etc.

export default client; 