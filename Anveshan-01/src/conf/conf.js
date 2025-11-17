
const conf = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUserCollectionID: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteItemsCollectionID: String(import.meta.env.VITE_APPWRITE_ITEMS_COLLECTION_ID),
    appwriteClaimsCollectionID: String(import.meta.env.VITE_APPWRITE_CLAIMS_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}       

export default conf