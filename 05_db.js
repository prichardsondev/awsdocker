
const {post} = require("./06_dynamo.js");

const db = {

    get: async () => {
        try {
            let data = await fs.readFile('./database.json', "utf8");
            let json = JSON.parse(data);
            return(json);
        }
        catch (err) {
            console.log(`db: ${err}`);
            return { "error": err };
        }
    },
    post: async (PK,SK) => {
        console.log("db ", PK,SK);
        //let {PK,SK} = await JSON.parse(data)
        try {
            let {error} = await post(PK,SK);
            return error ? {error} : {PK,SK};
          } catch (error) {
            console.log(error);
            return response(400, { message: error });
          }
    }
};

module.exports = {
    db,
};