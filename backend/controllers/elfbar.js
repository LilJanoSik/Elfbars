const Elfbar = require("../models/elfbar");

exports.getElfbars = async (req, res) => {
  try {
    const result = await Elfbar.find().select(
      "name type puffs price description _id"
    );
    if (result && result.length !== 0) {
      return res.status(200).json({
        count: result.length,
        elfbars: result.map((elfbar) => {
          return {
            ...elfbar.toObject(),
            request: {
              type: "GET",
              url: `http://localhost:3000/elfbar/${elfbar._id}`,
            },
          };
        }),
      });
    }
    res.status(404).json({ msg: "Elfbars not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getElfbar = async (req, res) => {
  try {
    const result = await Elfbar.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).json({
        ...result.toObject(),
        request: {
          type: "GET",
          url: "http://127.0.0.1:3000/elfbar",
        },
      });
    }
    res.status(404).json({ msg: "Elfbar not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.postElfbar = async (req, res) => {
  try {
    const elfbar = new Elfbar({
      name: req.body.name,
      type: req.body.type,
      puffs: req.body.puffs,
      price: req.body.price,
      description: req.body.description,
    });
    const result = await elfbar.save();
    if (result) {
      return res.status(201).json({
        message: "Your elfbar was created",
        createdElfbar: {
          ...result.toObject(),
          payload: {
            type: "GET",
            url: `http://127.0.0.1:3000/elfbar/${result._id}`,
          },
        },
      });
    }
    res.status(500).json({ msg: "Elfbar was not created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.putElfbar = async (req, res) => {
  try {
    const update = {
      name: req.body.name,
      type: req.body.type,
      puffs: req.body.type,
      price: req.body.price,
      description: req.body.description,
    };
    const result = await Elfbar.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).json({
        msg: `Elfbar ${req.params.id} was updated`,
        request: {
          type: "GET",
          url: `http://127.0.0.1:3000/elfbar/${req.params.id}`,
        },
      });
    }
    res.status(500).json({ msg: "Elfbar could not be updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.patchElfbar = async (req, res) => {
  try {
    const update = {};
    for (const ops of req.body) {
      update[ops.propName] = ops.value;
    }
    const result = await Elfbar.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(200).json({
        msg: `Elfbar ${req.params.id} was updated`,
        request: {
          type: "GET",
          url: `http://127.0.0.1:3000/elfbar/${req.params.id}`,
        },
      });
    }
    res.status(500).json({ msg: "Elfbar could not be updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.deleteElfbar = async (req, res) => {
  try {
    const result = await Elfbar.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({
        msg: `Elfbar ${result.name}, id: ${result._id} was deleted`,
      });
    }
    res.status(404).json({
      msg: "Elfbar not found",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};
