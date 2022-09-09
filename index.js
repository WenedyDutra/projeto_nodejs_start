const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

async function seedDB() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("project").collection("user");
    var filter = await collection.findOne({
      _id: ObjectID("631b50f30bf31aaa9cbadaf9"),
    });

    if (!filter) {
      await collection.insertOne({
        _id: ObjectID("631b50f30bf31aaa9cbadaf9"),
        Name: "admin",
        Password: "12345678",
        UserName: "admin",
        Cpf: "12345678996",
        Phone: "31936587295",
        Email: "teste@teste.com.br",
      });
    }
    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}
seedDB();
