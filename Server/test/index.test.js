const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

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
