const { createBook, getBook } = require("../../controllers/book.controller.js");
const db = require("../../models/index.js");

jest.mock("../../models/index.js", () => ({
  Book: {
    create: jest.fn(),
    findAll: jest.fn()
  }
}))

describe("BookController", () => {
  let req, res;
  beforeEach(() => {
    req = {
      params: {
        user_id: '1'
      },
      body: {
        name: 'Book 1',
        title: 'Câu chuyện về những vì sao',
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

  describe("new book", () => {
    it("should create successful", async () => {
      // Arrange 
      db.Book.create.mockReturnValue({
        id: 1,
        user_id: 1,
        name: 'Book 1',
        title: 'Câu chuyện về những vì sao'
      })
  
      // Act
      await createBook(req, res);
  
      // Assert
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        data: {
          id: 1,
          user_id: 1,
          name: 'Book 1',
          title: 'Câu chuyện về những vì sao'
        }
      });
    })
  
    it("should create failure", async () => {
      // Arrange 
      db.Book.create.mockImplementation(() => {
        throw new Error('Testing in here!');
      })
  
      // Act
      await createBook(req, res);
  
      // Assert
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Testing in here!'
      });
    })
  })
  
  describe("get book of user", () => {
    it ("should success", async () => {
      // Arrange
      db.Book.findAll.mockImplementation(() => {
        return [
          {
            id: 1,
            user_id: 1,
            name: "Book 1",
            title: "Test 1",
            createdAt: "2024-04-18T13:48:38.000Z",
            updatedAt: "2024-04-18T13:48:38.000Z"
          },
          {
            id: 2,
            user_id: 1,
            name: "Book 2",
            title: "Test 2",
            createdAt: "2024-04-18T13:48:38.000Z",
            updatedAt: "2024-04-18T13:48:38.000Z"
          },
        ]
      });

      // Act 
      await getBook(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: [
          {
            id: 1,
            user_id: 1,
            name: "Book 1",
            title: "Test 1",
            createdAt: "2024-04-18T13:48:38.000Z",
            updatedAt: "2024-04-18T13:48:38.000Z"
          },
          {
            id: 2,
            user_id: 1,
            name: "Book 2",
            title: "Test 2",
            createdAt: "2024-04-18T13:48:38.000Z",
            updatedAt: "2024-04-18T13:48:38.000Z"
          },
        ]
      })
    })

    it("should fail", async () => {
      // Arrange
      req = {
        ...req,
        params: {
          user_id: 'asdfas',
        }
      }

      // Act
      await getBook(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Vui lòng truyển đúng số" })
    })
  })
})