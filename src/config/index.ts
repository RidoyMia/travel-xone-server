import dotenv from "dotenv"
import path from "path"
dotenv.config({ path: path.join(process.cwd(), '.env') });


export default {
    salt : process.env.saltRobi,
    database : process.env.DATABASE_URL,
    accesstoken :process.env.ACCESS_TOKEN,
    refreshtoken : process.env.REFRESH_TOKEN,
    refreshtokenE: process.env.REFRESH_TOKEN_EXPIRE,
    accesstokenE:process.env.ACCESS_TOKEN_EXPIRE
}