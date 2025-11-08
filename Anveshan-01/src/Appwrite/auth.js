import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
import { Databases } from "appwrite";

class AuthService{
    client = new Client();
    databases
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
        this.databases = new Databases(this.client)
    }

    async createAccount({ name, email, password , phone}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            // Login after registration
            const current = await this.login({ email, password });
            console.log("User logged in as:", current);
            // Create user document in 'users' collection
            await this.databases.createDocument(
            conf.appwriteDatabaseID,
            conf.appwriteUserCollectionID,
            userAccount.$id, // use Auth user ID as document ID
            {
                userID: userAccount.$id,
                name,
                email: userAccount.email,
                role: "student",
                phone: phone || "" ,
            }
            );
             return await this.getCurrentUser();

        } catch (error) {
            console.error("Appwrite :: createAccount :: error", error);
            return false;
        }
        }


    async login({email, password}){
        try {
            const session = await this.account.createEmailPasswordSession(email, password)    
            return session;        
        } catch (error) {
            console.error("Appwrite :: createAccount :: error", error);
        }
    }

    async getCurrentUser() {
        try {
            const session = await this.account.getSession('current');
            if (!session) {
            console.warn("No active session.");
            return null;
            }
            return await this.account.get();
        } catch (error) {
            if (error.code === 401) {
            console.warn("User is not logged in.");
            } else {
            console.error("Appwrite :: getCurrentUser :: error", error);
            }
            return null;
        }
        }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.error("Appwrite :: logout :: error", error);
        }
    }
}

const authService = new AuthService()
export default authService