export interface IAccount {
    id?: string;
    user_id: string;
    name: string;
    balance: number;
    request?: boolean;
    failed?: boolean;
}
