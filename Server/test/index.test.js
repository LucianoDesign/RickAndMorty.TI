const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
const users = require("../src/utils/users")

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const { body } = await agent.get("/rickandmorty/character/1");
    expect(body).toHaveProperty(
      "id",
      "name",
      "species",
      "gender",
      "status",
      "origin",
      "image"
    );
  });
  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/character/9999").expect(500);
  });

});
describe("GET /rickandmorty/login", () => {
  it("Responde con un access true si el usuario y contraseña son correctos", async () =>{
    const {email, password} = users[0];
    
    const response = await agent.get(`/rickandmorty/login?email=${email}&password=${password}`);
    expect(response.body).toEqual({ access: true});
  });
  it("Responde con access: false si el usuario y contraseña son incorrectos", async () => {
    const incorrectEmail = "incorrecto@gmail.com";
    const incorrectPassword = "incorrectPassword";
    const response = await agent.get(`/rickandmorty/login?email=${incorrectEmail}&password=${incorrectPassword}`);
    expect(response.body).toEqual({ access: false });
  });
})
describe("POST /rickandmorty/fav", () =>{
  const character1 = { name : "Rick Sanchez" }
  const character2 = { name: "Morty Smith" }; 
  it("Lo que envies por body debe ser devuelto en un arreglo", async () => {
    const response = (await agent.post('/rickandmorty/fav').send(character1)).body;

    expect(response).toContainEqual(character1);
  })
  it("Si envías un nuevo elemento, debe ser devuelto en un arreglo que incluye los elementos enviados previamente", async () => {

    const response = (await agent.post("/rickandmorty/fav").send(character2)).body;
    expect(response).toContainEqual(character1);
    expect(response).toContainEqual(character2);
  });
})
describe("DELETE /rickandmorty/fav/:id", () => {
  const character1 = { name : "Rick Sanchez" };
  const character2 = { name: "Morty Smith" }; 
   it('Devuelve los personajes existentes luego de ID invalido', async () =>{
    const { body } = await agent.delete('/rickandmorty/fav/9999');
    expect(body).toContainEqual(character1);
    expect(body).toContainEqual(character2);
   })
});