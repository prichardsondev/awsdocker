//pull data from request -> validate -> send to service -> return response
//from service to view
const { service } = require("./04_service");

const controller = {
  getHealth: (req, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      timestamp: Date.now()
    }
    res.status(200).send(data);
  },
  putPet: async (req, res) => {
    try {
      let {PK, SK} = req.body;
      console.log("controller", PK,SK);
      //validate...

      if (PK&&SK) {
        await service.putPet({PK,SK});
        res.status(201).json();
      } else res.status(404).json();

    } catch (err) {
      console.log("controller putPet", err.message);
      res.status(500).json();
    }
  },

  getPets: async (req, res) => {
    try {
      let pets = await service.getPets();
      res.status(200).json({
        success: true,
        data: pets
      });
    } catch (err) {
      console.log("controller getPets...", err.message);
      res.status(500).json();
    }
  },
};

module.exports = {
  controller,
};