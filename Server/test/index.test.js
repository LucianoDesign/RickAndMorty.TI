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
  let favorites = []
  it("Lo que envies por body debe ser devuelto en un arreglo", async () => {
    const reqBody = { name : "Rick Sanchez" }
    const response = await agent.post('/rickandmorty/fav').send(reqBody);
    favorites.push(reqBody);
    expect(response.body).toEqual(favorites);
  })
  it("Si envías un nuevo elemento, debe ser devuelto en un arreglo que incluye los elementos enviados previamente", async () => {
    const newRequestBody = { name: "Morty Smith" }; 

    const newResponse = await agent.post("/rickandmorty/fav").send(newRequestBody);
    favorites.push(newRequestBody); 

    expect(newResponse.body).toEqual(favorites);
  });
})
describe("DELETE /rickandmorty/fav/:id", () => {
  let favorites = [];

  beforeEach(() => {
    favorites = [{ name: "Rick Sanchez" }, { name: "Morty Smith" }];
  });

  it("Si no hay ningún personaje con el ID proporcionado, devuelve el arreglo de favoritos sin modificar", async () => {
    const invalidId = 9999;
    const response = await agent.delete(`/rickandmorty/fav/${invalidId}`);
    expect(response.body).toEqual(favorites);
  });

  it("Si se proporciona un ID válido, elimina el personaje correspondiente del arreglo de favoritos", async () => {
    const validId = 1;
    const expectedFavorites = [{ name: "Morty Smith" }];

    const response = await agent.delete(`/rickandmorty/fav/${validId}`);
  favorites = favorites.filter((character) => character.name !== "Rick Sanchez");

  expect(response.status).toEqual(200);
  expect(response.body.length).toEqual(expectedFavorites.length);
  expect(favorites).toEqual(expectedFavorites);
  });
});