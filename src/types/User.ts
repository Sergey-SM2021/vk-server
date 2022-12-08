import {IPost} from "./Post";

export interface IUser {
    name: string,
    ava: string,
    id: string,
    status: string,
    posts:Array<IPost>
}
