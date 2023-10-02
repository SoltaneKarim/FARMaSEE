const mysql = require("mysql2");
const mysqlConfig = require("./config.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("db connected");
  }
});

//   user functions

const getAllUsers = function (req, res) {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addUser = function (req, res) {
  const query =
    "INSERT INTO user (fullName, email, password, address, phoneNumber, budget, likes, premium,imageUrl) VALUES (?,?,?,?,?,?,?,?,?)";
  const { fullName, email, password, address, phoneNumber, budget, likes, premium, imageUrl } =
    req.body;

  // Insert the user's data into the database without hashing the password
  connection.query(
    query,
    [fullName, email, password, address, phoneNumber, budget, likes, premium , imageUrl],
    (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      res.json({ success: true, message: "User added successfully" });
    }
  );
};

const updateUser = function (req, res) {
  const userId = req.params.id
  const { fullName, email, password, address, phoneNumber, budget, likes, premium } = req.body
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.log("Error hashing password:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const updateQuery = "UPDATE user SET fullName=?, email=?, password=?, address=?, phoneNumber=?, budget=?, likes=?, premium=? WHERE id=?";
    const updateValues = [fullName, email, hashedPassword, address, phoneNumber, budget, likes, premium, userId]
    connection.query(updateQuery, updateValues, (err, results) => {
      if (err) {
        console.log("Error updating data in the database:", err)
        return res.status(500).json({ error: "Internal server error" })
      }
      const token = jwt.sign({ userId: userId }, 'YourSecretKey')
      res.json({ success: true, message: "user updated successfully", token })
    })
  })
}

const deleteUser = function (req, res) {
  const userId = req.params.id;
  const query = "DELETE FROM user WHERE id=?";

  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

// animal functions
const getAnimalsBySpecificId = function (req, res) {
  const specificId = req.params.specificId; // Assuming you're passing the specificId as a route parameter

  const query = "SELECT * FROM animal WHERE specificId = ?";
  
  connection.query(query, [specificId], (err, results) => {
    if (err) {
      console.log("Error retrieving data from the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "No animals found with the specificId" });
    }

    res.json({ success: true, data: results });
  });
};


const getAllAnimals = function (req, res) {
  const query = "SELECT * FROM animal";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addAnimal = function (req, res) {
  const query = "INSERT INTO animal (specificId, type, sexe, age, consumption, birthday, weight, priceB, priceS, description) values (?,?,?,?,?,?,?,?,?,?)";
  const { specificId, type, sexe, age, consumption, birthday, weight, priceB, priceS, description } = req.body;

  connection.query(query, [specificId, type, sexe, age, consumption, birthday, weight, priceB, priceS, description], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "animal added successfully" });
    });
};

const updateAnimal = function (req, res) {
  const animalId = req.params.id;
  const { type, sexe, age, consumption, birthday, weight, priceB, priceS, description } = req.body;
  const query =
    "UPDATE animal SET type=?, sexe=?, age=?, consumption=?, birthday=?, weight=?, priceB=?, priceS=?, description=?  WHERE id=?";

  connection.query(query, [type, sexe, age, consumption, birthday, weight, priceB, priceS, description, animalId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteAnimal = function (req, res) {
  const animalId = req.params.id;
  const query = "DELETE FROM animal WHERE id=?";

  connection.query(query, [animalId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
};

//   commerce functions

const getAllCommerces = function (req, res) {
  const query = "SELECT * FROM commerce";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addCommerce = function (req, res) {
  const query = "INSERT INTO commerce (type, quantity) values (?,?)";
  const { type, quantity } = req.body;

  connection.query(query, [type, quantity], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "commerce added successfully" });
    })
};

const updateCommerce = function (req, res) {
  const commerceId = req.params.id;
  const { type, quantity } =  req.body;
  const query = "UPDATE commerce SET type=?, quantity=? WHERE id=?";

  connection.query(query, [type, quantity, commerceId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteCommerce = function (req, res) {
  const commerceId = req.params.id;
  const query = "DELETE FROM commerce WHERE id=?";

  connection.query(query, [commerceId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   disease functions

const getAllDiseases = function (req, res) {
  const query = "SELECT * FROM disease";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addDisease = function (req, res) {
  const query = "INSERT INTO disease (name, type, image, description, solution) values (?,?,?,?,?)";
  const { name, type, image, description, solution } = req.body;

  connection.query(query, [name, type, image, description, solution], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "disease added successfully" });
    })
};

const updateDisease = function (req, res) {
  const diseaseId = req.params.id;
  const { name, type, image, description, solution } =  req.body;
  const query = "UPDATE disease SET name=?, type=?, image=?, description=?, solution=? WHERE id=?";

  connection.query(query, [name, type, image, description, solution, diseaseId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteDisease = function (req, res) {
  const diseaseId = req.params.id;
  const query = "DELETE FROM disease WHERE id=?";

  connection.query(query, [diseaseId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   price functions

const getAllPrices = function (req, res) {
  const query = "SELECT * FROM price";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addPrice = function (req, res) {
  const query = "INSERT INTO price (price, type) values (?,?)";
  const { price, type } = req.body;

  connection.query(query, [price, type], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "price added successfully" });
    })
};

const updatePrice = function (req, res) {
  const priceId = req.params.id;
  const { price, type } =  req.body;
  const query = "UPDATE price SET price=?, type=? WHERE id=?";

  connection.query(query, [price, type, priceId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deletePrice = function (req, res) {
  const priceId = req.params.id;
  const query = "DELETE FROM price WHERE id=?";

  connection.query(query, [priceId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   resource functions

const getAllResources = function (req, res) {
  const query = "SELECT * FROM resource";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addResource = function (req, res) {
  const query = "INSERT INTO resource (type, quantity) values (?,?)";
  const { type, quantity } = req.body;

  connection.query(query, [type, quantity], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "resource added successfully" });
    })
};

const updateResource = function (req, res) {
  const resourceId = req.params.id;
  const { type, quantity } =  req.body;
  const query = "UPDATE resource SET type=?, quantity=? WHERE id=?";

  connection.query(query, [type, quantity, resourceId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteResource = function (req, res) {
  const resourceId = req.params.id;
  const query = "DELETE FROM resource WHERE id=?";

  connection.query(query, [resourceId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   trees functions
const getTreesBySpecificId = function (req, res) {
  const specificId = req.params.specificId; // Assuming you're passing the specificId as a route parameter

  const query = "SELECT * FROM trees WHERE specificId = ?";
  
  connection.query(query, [specificId], (err, results) => {
    if (err) {
      console.log("Error retrieving data from the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "No trees found with the specificId" });
    }

    res.json({ success: true, data: results });
  });
};


const getAllTrees = function (req, res) {
  const query = "SELECT * FROM trees";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addTree = function (req, res) {
  const query = "INSERT INTO trees (specificId, type, age, quantity, report) values (?,?,?,?,?)";
  const { specificId, type, age, quantity, report } = req.body;

  connection.query(query, [specificId, type, age, quantity, report], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "tree added successfully" });
    });
};

const updateTree = function (req, res) {
  const treeId = req.params.id;
  const { type, age, quantity, report } =  req.body;
  const query = "UPDATE trees SET type=?, age=?, quantity=?, report=? WHERE id=?";

  connection.query(query, [type, age, quantity, report, treeId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteTree = function (req, res) {
  const treeId = req.params.id;
  const query = "DELETE FROM trees WHERE id=?";

  connection.query(query, [treeId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   wallet functions

const getAllWallets = function (req, res) {
  const query = "SELECT * FROM wallet";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addWallet = function (req, res) {
  const query = "INSERT INTO wallet (money) values (?)";
  const { money } = req.body;

  connection.query(query, [money], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "wallet added successfully" });
    })
};

const updateWallet = function (req, res) {
  const walletId = req.params.id;
  const { money } =  req.body;
  const query = "UPDATE wallet SET money=? WHERE id=?";

  connection.query(query, [money, walletId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteWallet = function (req, res) {
  const walletId = req.params.id;
  const query = "DELETE FROM wallet WHERE id=?";

  connection.query(query, [walletId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   groups functions

const getAllGroups = function (req, res) {
  const query = "SELECT * FROM `groups`"; // Enclose "groups" in backticks
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addGroup = function (req, res) {
  const query = "INSERT INTO `groups` (specificId, name, members, consumption, eatingTime, duration) values (?,?,?,?,?,?)";
  const { specificId, name, members, consumption, eatingTime, duration } = req.body;

  connection.query(query, [specificId, name, members, consumption, eatingTime, duration], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "group added successfully" });
    })
};

const getBySpecificId = function (req, res) {
  const specificId = req.params.specificId; // Assuming you're passing the specificId as a route parameter

  const query = "SELECT * FROM `groups` WHERE specificId = ?";
  
  connection.query(query, [specificId], (err, results) => {
    if (err) {
      console.log("Error retrieving data from the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Group not found" });
    }

    // Return all matching results in an array
    const groupData = results;

    res.json({ success: true, data: groupData });
  });
};
const deleteBySpecificId = function (req, res) {
  const specificId = req.params.specificId; // Assuming you're passing the specificId as a route parameter
  const groupIdToDelete = req.params.id; // Assuming you're passing the groupId as a route parameter

  const query = "DELETE FROM `groups` WHERE specificId = ? AND id = ?";
  
  connection.query(query, [specificId, groupIdToDelete], (err, results) => {
    if (err) {
      console.log("Error deleting data from the database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "No group found with the specified specificId and groupId" });
    }

    res.json({ success: true, message: "Group deleted successfully" });
  });
};




const updateGroup = function (req, res) {
  const groupId = req.params.id;
  const { name, members, consumption, eatingTime, duration } =  req.body;
  const query = "UPDATE `groups` SET name=?, members=?, consumption=?, eatingTime=?, duration=? WHERE id=?";

  connection.query(query, [name, members, consumption, eatingTime, duration, groupId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteGroup = function (req, res) {
  const groupId = req.params.id;
  const query = "DELETE FROM `groups` WHERE id=?";

  connection.query(query, [groupId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   historique functions

const getAllHistory = function (req, res) {
  const query = "SELECT * FROM `historique`";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addHistory = function (req, res) {
  const query = "INSERT INTO `historique` (trace) values (?)";
  const { trace } = req.body;

  connection.query(query, [trace], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "trace added successfully" });
    })
};

const updateHistory = function (req, res) {
  const historyId = req.params.id;
  const { trace } =  req.body;
  const query = "UPDATE `historique` SET trace=? WHERE id=?";

  connection.query(query, [trace, historyId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteHistory = function (req, res) {
  const historyId = req.params.id;
  const query = "DELETE FROM `historique` WHERE id=?";

  connection.query(query, [historyId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

//   workers functions

const getAllWorkers = function (req, res) {
  const query = "SELECT * FROM `workers`";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addWorker = function (req, res) {
  const query = "INSERT INTO `workers` (fullName, phoneNumber, address, salaire, avance) values (?,?,?,?,?)";
  const { fullName, phoneNumber, address, salaire, avance } = req.body;

  connection.query(query, [fullName, phoneNumber, address, salaire, avance], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "worker added successfully" });
    })
};

const updateWorker = function (req, res) {
  const workerId = req.params.id;
  const { fullName, phoneNumber, address, salaire, avance } =  req.body;
  const query = "UPDATE `workers` SET fullName=?, phoneNumber=?, address=?, salaire=?, avance=? WHERE id=?";

  connection.query(query, [fullName, phoneNumber, address, salaire, avance, workerId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteWorker = function (req, res) {
  const workerId = req.params.id;
  const query = "DELETE FROM `workers` WHERE id=?";

  connection.query(query, [workerId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

// doctor functions

const getAllDoctors = function (req, res) {
  const query = "SELECT * FROM `doctor`";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addDoctor = function (req, res) {
  const query = "INSERT INTO `doctor` (fullName, phoneNumber, address, online) values (?,?,?,?)";
  const { fullName, phoneNumber, address, online } = req.body;

  connection.query(query, [fullName, phoneNumber, address, online], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "doctor added successfully" });
    })
};

const updateDoctor = function (req, res) {
  const doctorId = req.params.id;
  const { fullName, phoneNumber, address, online } =  req.body;
  const query = "UPDATE `doctor` SET fullName=?, phoneNumber=?, address=?, online=? WHERE id=?";

  connection.query(query, [fullName, phoneNumber, address, online, doctorId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deleteDoctor = function (req, res) {
  const doctorId = req.params.id;
  const query = "DELETE FROM `doctor` WHERE id=?";

  connection.query(query, [doctorId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

// perte functions

const getAllPerte = function (req, res) {
  const query = "SELECT * FROM `perte`";
  connection.query(query, (err, results) => {
    if (err) {
      console.log("error fetching data from the database", err);
      return res.status(500).json({ error: "internal server error" });
    }
    res.json(results);
  });
};

const addPerte = function (req, res) {
  const query = "INSERT INTO `perte` (type, description) values (?,?)";
  const { type, description } = req.body;

  connection.query(query, [type, description], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ success: true, message: "perte added successfully" });
    })
};

const updatePerte = function (req, res) {
  const perteId = req.params.id;
  const { type, description } =  req.body;
  const query = "UPDATE `perte` SET type=?, description=? WHERE id=?";

  connection.query(query, [type, description, perteId], (err, results) => {
      if (err) {
        console.log("Error inserting data into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json(results);
    });
};

const deletePerte = function (req, res) {
  const perteId = req.params.id;
  const query = "DELETE FROM `perte` WHERE id=?";

  connection.query(query, [perteId], (err, results) => {
    if (err) {
      console.log("Error inserting data into the database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

module.exports = {
  getAllPerte,
  addPerte,
  updatePerte,
  deletePerte,
  getAllDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor,
  getAllWorkers,
  addWorker,
  updateWorker,
  deleteWorker,
  getAllHistory,
  addHistory,
  updateHistory,
  deleteHistory,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getAllAnimals,
  getTreesBySpecificId,
  addAnimal,
  updateAnimal,
  deleteAnimal,
  getAllCommerces,
  addCommerce,
  updateCommerce,
  deleteCommerce,
  getAllDiseases,
  addDisease,
  updateDisease,
  deleteDisease,
  getAllPrices,
  addPrice,
  updatePrice,
  deletePrice,
  getAllResources,
  addResource,
  updateResource,
  deleteResource,
  getAllTrees,
  getAnimalsBySpecificId,
  addTree,
  updateTree,
  deleteTree,
  getAllWallets,
  addWallet,
  updateWallet,
  deleteWallet,
  getAllGroups,
  addGroup,
  updateGroup,
  deleteGroup,
  getBySpecificId,
  deleteBySpecificId
}