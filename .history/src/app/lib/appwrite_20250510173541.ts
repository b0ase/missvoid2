import { Client, Account, Databases, ID } from 'appwrite';

// const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
// const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

// Ensure these are set in your .env.local or environment
export const APPWRITE_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'YOUR_DATABASE_ID'; 
export const PROFILES_COLLECTION_ID = process.env.NEXT_PUBLIC_PROFILES_COLLECTION_ID || 'YOUR_PROFILES_COLLECTION_ID';

// if (!APPWRITE_ENDPOINT) {
//   throw new Error('Missing environment variable: NEXT_PUBLIC_APPWRITE_ENDPOINT. Please set it in .env.local (e.g., https://cloud.appwrite.io/v1)');
// }

// if (!APPWRITE_PROJECT_ID) {
//   throw new Error('Missing environment variable: NEXT_PUBLIC_APPWRITE_PROJECT_ID. Please set it in .env.local');
// }

// Initialize the Appwrite client with hardcoded values
const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Hardcoded Endpoint
    .setProject('681f635e0018cc00a5cf'); // Hardcoded Project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID };

export default client; 