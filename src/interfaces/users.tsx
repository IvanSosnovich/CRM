export interface User {
    id: string,
    name: string,
    role: string,
    phone: string
}

export interface UserState {
    user: User | null
}
