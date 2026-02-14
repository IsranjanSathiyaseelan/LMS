using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        //static private List<Book> books = new List<Book>
        //{
        //    new Book
        //    {
        //        Id = 1,
        //        Title = "Clean Code",
        //        Author = "Robert C. Martin",
        //        Description = "A book about writing clean, maintainable code."
        //    },
        //    new Book
        //    {
        //        Id = 2,
        //        Title = "The Pragmatic Programmer",
        //        Author = "Andrew Hunt",
        //        Description = "A guide to becoming a better and more practical programmer."
        //    },
        //    new Book
        //    {
        //        Id = 3,
        //        Title = "Atomic Habits",
        //        Author = "James Clear",
        //        Description = "A book about building good habits and breaking bad ones."
        //    }
        //};
        private readonly LMSAPIContext _context;
        public BooksController(LMSAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks() 
        {
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBookById(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return NotFound();

            return Ok(book);
        }

        [HttpPost]
        public async Task<ActionResult<Book>> AddBook(Book newBook)
        {
            if (newBook == null)
                return BadRequest();

            _context.Books.Add(newBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBookById), new { id = newBook.Id }, newBook);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, Book updatedBook)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return NotFound();

            book.Id = updatedBook.Id;
            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.Description = updatedBook.Description;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return NotFound();

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
