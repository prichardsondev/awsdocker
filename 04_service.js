//preform logic -> send to db 

const { db } = require("./05_db");

const service = {
    putPet: async ({PK,SK}) => {
        try {
            console.log("service ", PK,SK);
            let {error}  = db.post(PK,SK);
        } catch (err) { }
    },
    getPets: async () => {
        let pets = await db.get();
        return pets;
    },

    //getPet: async(id)
    //deletePet: async(id)
    //...
};

module.exports = {
    service,
};