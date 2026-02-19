import conf from "../config/config";


export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = Account(this.client);
    
    }

    async createAccount({email,password,name}){
        try {
            await this.account.create(email,password,name);
        } catch (error) {
            throw error;
        }
    }

}
const authService = new AuthService();
export default authService;

