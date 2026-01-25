import { User } from "../Classes";
import { Snowflake } from "../Types";

class UserManager {
    public users: Map<Snowflake, User> = new Map();

    public addUser(): void {}
    public removeUser(userId: Snowflake): void {}
    public editUser(userId: Snowflake, payload: Partial<User>): void {}
}

export { UserManager };