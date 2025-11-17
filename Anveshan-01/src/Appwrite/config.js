import { Client, Databases, ID, Storage } from "appwrite";
import conf from "../conf/conf";
import { Query } from "appwrite";



export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createItem({title, description, category, imageId, status, location, report_date, userId}){
        try {

            await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteItemsCollectionID,
                ID.unique(),
                {
                    title,
                    description, 
                    category,
                    imageId,
                    status,
                    location,
                    report_date,
                    userId
                }                
            );            
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updateItem(itemId,{title, description, category, status, location, report_date}){
         try {

            await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteItemsCollectionID,
                itemId,
                {
                    title,
                    description, 
                    category,                    
                    status,
                    location,
                    report_date,                    
                }                
            );            
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deleteItem(itemId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteItemsCollectionID,
                itemId,
            );
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
        }
    }

    async getItem(itemId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteItemsCollectionID,
                itemId  
            )
        } catch (error) {
            console.log("Appwrite serive :: getItem :: error", error);
            return false
        }
    }

    async getItems(queries = [Query.notEqual("status", "claimed")]) {
    try {
        return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteItemsCollectionID,
        queries
        );
    } catch (error) {
        console.log("Appwrite service :: getPosts :: error", error);
        return false;
    }
    }

    async uploadFile(file) {
        try {
        return await this.bucket.createFile(
            conf.appwriteBucketID,
            ID.unique(),
            file
        );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            );
            return true
        } catch (error) {
                console.log("Appwrite service :: deleteFile :: error", error);
                return false;
        }
    }
getFilePreview(fileId) {
    if (!fileId) return null;
    
    try {
        return this.bucket.getFileView(conf.appwriteBucketID, fileId);
    } catch (error) {
        console.error("getFileView error:", error);
        return null;
    }
}
    async createClaim({itemId, claimerId}){
        try {
            await this.databases.createDocument(
                    conf.appwriteDatabaseID,
                    conf.appwriteClaimsCollectionID,
                    ID.unique(),
                    {
                        itemId,
                        claimerId,
                        status: "pending"
                    }

                )
        } catch (error) {
            console.error("Appwrite :: Claim :: error", error);
        }
    }   

    async searchItems(searchTerm, category = 'all') {
        const queries = [];

        if (searchTerm.trim()) {
            queries.push(
                Query.or([
                    Query.search("title", searchTerm),
                    Query.search("description", searchTerm)
                ])
            );
        }

        if (category !== 'all') {
            queries.push(Query.equal("status", category));
        }

        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteItemsCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: search Items :: error", error);
            return false;
        }
    }

}

const service = new Service()
export default service