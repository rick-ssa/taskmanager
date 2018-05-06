
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
 * Collection of User
 */
function Users() {
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
    this.addNewUser = function (name, login, typeAccess = 0) {

        // ensure that typeAccess is a number
        if (isNaN(typeAccess)) {
            throw "typeAccess must be a Integer (Users.add(user:User,[typeAccess:integer]=0))"
        }

        let u = new User(name, login); // create a new user

        users.push(u); // add a new user to array
        access.push(typeAccess); // add a type of access in the same index

        return u; // return the recently created user
    };

    /**
     * Return a array with an object user and your access type
     * @param {Integer} index 
     */
    this.getUser = function (index) {
        // validate the parameter
        if (isNaN(index)) {
            throw "you must provide a integer parameter ( Users.getUser(index:Integer) )"
        }
        return [users[index], access[index]];
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
        if(isNaN(id)){
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
    this.remove = function(index) {
        notes.splice(index,1);
    }

    /**
     * Clear the array
     */
    this.clear = function () {
        notes = [];
    }
    
}