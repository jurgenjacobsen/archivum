import { BookManager, UserManager } from './Managers'

class LibraryManager {
    public users = new UserManager();
    public books = new BookManager();

    constructor() {
    }
}

export { LibraryManager };