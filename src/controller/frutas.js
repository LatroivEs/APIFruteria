import { getConnection } from "../database/database";

const getFrutas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("Select * from Frutas");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getFruta = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("Select * from Frutas where Fruta_id = ?", id);
        console.log(result[0])
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addFruta = async (req, res) => {

    try {
        const connection = await getConnection();
        const { Nombre, Precio} = req.body;

        if (Nombre === undefined || Precio === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
        } else {
            const cliente = { Nombre, Precio };
            const result = await connection.query("INSERT INTO Frutas SET ?", cliente);

            res.json(result)
        }
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }

};

const deleteFruta = async (req, res) => {
    try {
        const connection = await getConnection();
        const { id } = req.params;

        if (id !== undefined && id !== "") {
            const result = await connection.query("DELETE FROM Frutas WHERE Fruta_id = ?", id);
            res.json(result)
        } else {
            res.status(400).json({ message: "Bad Request." });
        }

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const updateFruta = async (req, res) => {
    try {
        const connection = await getConnection();
        const { Fruta_id, autoritypassword } = req.body;

        if (Fruta_id !== undefined && Fruta_id !== "") {
            let { Nombre, Precio  } = req.body;
            
            const oldRow = await connection.query("Select * from Frutas where Fruta_id = ?", Fruta_id);
            const oldRowJson = Object.values(JSON.parse(JSON.stringify(oldRow)))[0];
            console.log(oldRowJson)
            
            if (Nombre === undefined){ Nombre = oldRowJson["Nombre"]}
            if (Precio === undefined){ Precio = oldRowJson["Precio"]}
            console.log(connection)
            console.log (Nombre,Precio)
            let fruta ={Nombre,Precio}
                 
            const result = await connection.query("UPDATE Frutas Set ? where Fruta_id = ?", [fruta, Fruta_id]);
            res.json(result);
        } else {
            res.status(500).json({ message: "Bad Request." });
        }
       
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getFrutas,
    getFruta,
    addFruta,
    deleteFruta,
    updateFruta,

};