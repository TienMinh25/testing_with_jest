const { createUser, getUser } = require("../../controllers/user.controller.js");
const db = require("../../models/index.js");

jest.mock("../../models/index.js", () => ({
  User: {
    create: jest.fn(),
    findOne: jest.fn()
  }
}))

describe("UserController", () => {
  let req, res;
  beforeEach(() => {
    req = {
      params: { id: '1' },
      body: {
        email: 'test123@gmail.com',
        password: 'hihihi',
        name: 'test',
        mobile_phone: '',
      }
    }

    res =  {
      status: jest.fn(() => res),
      json: jest.fn(),
    }
  })
  
  afterEach(() => {
    jest.clearAllMocks();
  })

  describe("create user", () => {
    it("should create successful", async () => {
      // Arrange 
      db.User.create.mockReturnValue({
        id: 4,
        email: 'test123@gmail.com',
        password: 'hihihi',
        name: 'test',
        mobile_phone: '',
        updatedAt: '2024-04-18T08:12:29.361Z',
        createdAt: '2024-04-18T08:12:29.361Z'
      })
  
      // Act
      await createUser(req, res);
  
      // Assert
      // các bạn để ý ở đây, res.status thực chất là 1 spy, 
      // res.json cũng vậy
      // vì chúng ta đang theo dõi các đối số được gọi và hành vi của chúng
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        data: {
          id: 4,
          email: 'test123@gmail.com',
          password: 'hihihi',
          name: 'test',
          mobile_phone: '',
          updatedAt: '2024-04-18T08:12:29.361Z',
          createdAt: '2024-04-18T08:12:29.361Z'
        }
      });
    })
  
    it("should create failure", async () => {
      // Arrange 
      db.User.create.mockImplementation(() => {
        throw new Error('Testing in here!');
      })
  
      // Act
      await createUser(req, res);
  
      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Testing in here!'
      });
    })
  })
  
  describe("get user", () => {
    it ("should get user successful!", async () => {
      // Arrange
      db.User.findOne.mockImplementation(() => ({
        dataValues: {
          id: 1,
          email: 'test@gmail.com',
          password: 'hihihi',
          name: 'test',
          mobile_phone: '',
          createdAt: '2024-04-18T08:10:28.000Z',
          updatedAt: '2024-04-18T08:10:28.000Z'
        }
      }))

      // Act 
      await getUser(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: {
          id: 1,
          email: 'test@gmail.com',
          password: 'hihihi',
          name: 'test',
          mobile_phone: '',
          createdAt: '2024-04-18T08:10:28.000Z',
          updatedAt: '2024-04-18T08:10:28.000Z'
        }
      })
    })

    it ("should get user failure", async () => {
      // Arrange
      db.User.findOne.mockImplementation(() => null);

      // Act
      await getUser(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "User not found!" })
    })
  })
})