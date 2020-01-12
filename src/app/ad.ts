import { Profile } from "./profile";

export class Ad{
    id: number;
    title: string;
    description: string;
    value: string;
    pub_date: string;
    owner: Profile;
}