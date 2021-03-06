
/**
 * class user
 * @param {string} name 
 */
function User(name, login) {
    let mName = name; // store the name
    let mLogin = login; // store the login

    // getters and setters
    this.getName = function () {
        return mName;
    };

    this.setName = function (value) {
        mName = value;
    };

    this.getLogin = function () {
        return mLogin;
    };

    this.setLogin = function (value) {
        mLogin = value;
    };
}

/**
 * Collection of User with access
 */
function QualifiedUsers() {
    let users = []; // store the object users
    let access = []; // store the type of access of them
    /**
     * this function add a new user by a existent User instancy
     * @param {User} user // a User object
     * @param {Integer} typeAccess  // type of access
     */
    this.add = function (user, typeAccess = 0) {

        // validate the paramaters
        if (!user) {
            throw "user must be setted (Users.add(user:User,[typeAccess:integer]=0))";
        }

        if (isNaN(typeAccess)) {
            throw "typeAccess must be a Integer (Users.add(user:User,[typeAccess:integer]=0))"
        }

        users.push(user); // add the user
        access.push(typeAccess); // add the type of access as a integer in the user same index
    };

    /**
     * insert a new user by create a new user
     * @param {string} name 
     * @param {string} login 
     * @param {Integer} typeAccess 
     */
    this.addNewQUser = function (name, login, tpAccess = 0) {

        // ensure that typeAccess is a number
        if (isNaN(typeAccess)) {
            throw "typeAccess must be a Integer (Users.add(user:User,[typeAccess:integer]=0))"
        }

        let u = new User(name, login); // create a new user

        users.push(u); // add a new user to array
        access.push(typeAccess); // add a type of access in the same index

        return { user: u, typeAccess: tpAccess }; // return the recently created user with his respective access
    };

    /**
     * Return a array with an object user and your access type
     * @param {Integer} index 
     */
    this.getQUser = function (index) {
        // validate the parameter
        if (isNaN(index)) {
            throw "you must provide a integer parameter ( Users.getUser(index:Integer) )"
        }
        return { user: users[index], typeAccess: access[index] };
    }

    // remove users by index
    this.remove = function (index) {
        // validate the parameter
        if (isNaN(index)) {
            throw "you must provide a integer parameter ( Users.getUser(index:Integer) )"
        }

        users.splice(index, 1);
    };

    // return how many users the array has
    this.count = function () {
        return users.length;
    };

    this.clear = function () {
        users = [];
        acess = [];
    };
}

/**
 * 
 * @param {number} id 
 * @param {string} title 
 * @param {string} description 
 * @param {Date} dateCreation 
 */
function Pendency(id, title, description, dateCreation) {
    let mId = id;
    let mTitle = title;
    let mDescription = description;
    let mDateCreation = dateCreation;
    let mCreator = {};
    let mSolution = "";
    let mSolutionResponsible = {};
    let mDateSolution;

    //getters and setter
    this.getId = function () {
        return mId;
    };

    this.setId = function (id) {
        if (isNaN(id)) {
            throw "id must be a integer ( Pendency.setId(id:integer) )"
        }

        mId = id;
    };

    this.getTitle = function () {
        return mTitle;
    };

    this.setTitle = function (title) {
        mTitle = title;
    };

    this.getDescription = function () {
        return mDescription;
    };

    this.setDescription = function (description) {
        mDescription = description;
    };

    this.getDateCreation = function () {
        return mDateCreation;
    };

    this.setDateCreation = function (dateCreation) {
        mDateCreation = dateCreation;
    };

    this.getCreator = function () {
        return mCreator;
    };

    this.setCreator = function (creator) {
        mCreator = creator;
    };

    this.getSolution = function () {
        return mSolution;
    };

    this.setSolution = function (solution) {
        mSolution = solution;
    };

    this.getSolutionResponsible = function () {
        return mSolutionResponsible;
    };

    this.setSolutionResponsible = function (responsible) {
        mSolutionResponsible = responsible;
    };

    this.getDateSolution = function () {
        return mDateSolution;
    };

    this.setDateSolution = function (dateSolution) {
        mDateSolution = dateSolution;
    };

}

/**
 * collection of Pendency
 */
function Pendencys() {
    let pends = [];

    /**
     * add a pendency object
     * @param {Pendency} pendency 
     */
    this.add = function (pendency) {
        pends.push(pendency);
    };

    /**
     * add a pendency by creating a new object
     * @param {Number} id 
     * @param {string} title 
     * @param {string} description 
     * @param {Date} dateCreation 
     */
    this.addNewPendency = function (id, title, description, dateCreation) {
        let p = new Pendency(id, title, description, dateCreation);

        pends.push(p);
        return p;
    };

    /**
     * get a Pendency by array Index
     * @param {Number} index 
     */
    this.getPendency = function (index) {
        return pends[index];
    };

    /**
     * return the array lenght
     */
    this.count = function () {
        return pends.length;
    };

    /**
     * remove a Pendency from array by index
     * @param {Number} index 
     */
    this.remove = function (index) {
        pends.splice(index, 1);
    }

    /**
     * reset the array
     */
    this.clear = function () {
        pends = [];
    };
}

/**
 * Create a note
 * @param {User} user 
 * @param {string} text 
 * @param {Date} date 
 */
function Note(user, text, date) {
    let mUser = user;
    let mText = text;
    let mDate = date;

    // getters and setters

    this.getUser = function () {
        return mUser;
    };

    this.setUser = function (user) {
        mUser = user;
    };

    this.getText = function () {
        return mText;
    };

    this.setText = function (text) {
        mText = text;
    };

    this.getDate = function () {
        return mDate;
    };

    this.setDate = function (date) {
        mDate = date;
    };

}

/**
 * Collection for Note
 */
function Notes() {
    let notes = [];

    /**
     * Add a existent Note to the collection
     * @param {Note} note 
     */
    this.add = function (note) {
        notes.push(note);
    };

    /**
     * Add a new note to the collection and return it
     * @param {User} user A User object
     * @param {string} text Type a note
     * @param {Date} date Date Creation for the note
     */
    this.addNewNote = function (user, text, date) {
        let n = new Note(user, text, date);

        notes.push(n);
        return n;
    };

    /**
     * Return the note by index
     * @param {integer} index 
     */
    this.getNote = function (index) {
        return notes[index];
    };

    /**
     * Return the array lenght
     */
    this.count = function () {
        return notes.length;
    }

    /**
     * Remove note by index
     * @param {integer} index 
     */
    this.remove = function (index) {
        notes.splice(index, 1);
    }

    /**
     * Clear the array
     */
    this.clear = function () {
        notes = [];
    }

}

/**
 * represent a file object
 * @param {integer} id unique identification for the file
 * @param {string} path path to get the file
 * @param {string} alias alias to the file
 */
function File(id, path, alias) {
    let mId = id;
    let mPath = path;
    let mAlias = alias;

    // getters and setters

    this.getId = function () {
        return mId;
    };

    this.setId = function (id) {
        mId = id;
    };

    this.getPath = function () {
        return mPath;
    };

    this.setPath = function (path) {
        mPath = path;
    };

    this.getAlias = function () {
        return mAlias;
    }

    this.setAlias = function (alias) {
        mAlias = alias;
    }
}

/**
 * collection of Files
 */
function Files() {
    let files = [];

    /**
     * Add a existent object file
     * @param {File} file 
     */
    this.add = function (file) {
        files.push(file);
    };

    /**
     * add a new file to the collection and return it
     * @param {integer} id 
     * @param {string} path 
     * @param {string} alias 
     */
    this.addNewFile = function (id, path, alias) {
        let f = new File(id, path, alias);

        files.push(f);
        return f;
    };

    /**
     * Get the file by index
     * @param {integer} index 
     */
    this.getFile = function (index) {
        return files[index];
    };

    /**
     * return the length of the collection
     */
    this.count = function () {
        return files.length;
    };

    /**
     * Remove a object file from the collection by index
     * @param {integer} index 
     */
    this.remove = function (index) {
        files.splice(index, 1);
    };

    /**
     * clear the collection
     */
    this.clear = function () {
        files = [];
    };
}

function Task(id, title, description, creator, dateCreation) {
    let mId = id;
    let mTitle = title;
    let mDescription = description;
    let mCreator = creator;
    let mTeam;
    let mPriority;
    let mType;
    let mParent;
    let mChildren;
    let mNotes;
    let mPendencys;
    let mFiles;
    let mDeadLine;
    let mDateStart;
    let mDateCreation = dateCreation;
    let mDateFinish;

    this.getId = function () {
        return mId;
    };

    this.setId = function (Id) {
        mId = Id;
    };

    this.getTitle = function () {
        return mTitle;
    };

    this.setTitle = function (Title) {
        mTitle = Title;
    };

    this.getDescription = function () {
        return mDescription;
    };

    this.setDescription = function (Description) {
        mDescription = Description;
    };

    this.getCreator = function () {
        return mCreator;
    };

    this.setCreator = function (Creator) {
        mCreator = Creator;
    };

    this.getTeam = function () {
        return mTeam;
    };

    this.setTeam = function (Team) {
        mTeam = Team;
    };

    this.getPriority = function () {
        return mPriority;
    };

    this.setPriority = function (Priority) {
        mPriority = Priority;
    };

    this.getType = function () {
        return mType;
    };

    this.setType = function (Type) {
        mType = Type;
    };

    this.getParent = function () {
        return mParent;
    };

    this.setParent = function (Parent) {
        mParent = Parent;
    };

    this.getChildren = function () {
        return mChildren;
    };

    this.setChildren = function (Children) {
        mChildren = Children;
    };

    this.getNotes = function () {
        return mNotes;
    };

    this.setNotes = function (Notes) {
        mNotes = Notes;
    };

    this.getPendencys = function () {
        return mPendencys;
    };

    this.setPendencys = function (Pendencys) {
        mPendencys = Pendencys;
    };

    this.getFiles = function () {
        return mFiles;
    };

    this.setFiles = function (Files) {
        mFiles = Files;
    };

    this.getDeadLine = function () {
        return mDeadLine;
    };

    this.setDeadLine = function (DeadLine) {
        mDeadLine = DeadLine;
    };

    this.getDateStart = function () {
        return mDateStart;
    };

    this.setDateStart = function (DateStart) {
        mDateStart = DateStart;
    };

    this.getDateCreation = function () {
        return mDateCreation;
    };

    this.setDateCreation = function (DateCreation) {
        mDateCreation = DateCreation;
    };

    this.getDateFinish = function () {
        return mDateFinish;
    };

    this.setDateFinish = function (DateFinish) {
        mDateFinish = DateFinish;
    };


}

function Tasks() {
    let tasks = [];

    this.add = function (Task) {
        tasks.push(Task);
    };

    this.addNewTask = function (id, title, description, creator, dateCreation) {
        let obj = new Task(id, title, description, creator, dateCreation);
        tasks.push(obj);
        return obj;
    };

    this.getTask = function (index) {
        return tasks[index];
    };

    this.count = function () {
        return tasks.length;
    };

    this.remove = function (index) {
        tasks.splice(index, 1);
    };

    this.clear = function () {
        tasks = [];
    };
}