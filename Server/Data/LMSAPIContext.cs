using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class LMSAPIContext : DbContext
    {
        public LMSAPIContext(DbContextOptions<LMSAPIContext> options): base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Book>().HasData(
            new Book
            {
                Id = 1,
                Title = "Clean Code",
                Author = "Robert C. Martin",
                Description = "A book about writing clean, maintainable code."
            },
            new Book
            {
                Id = 2,
                Title = "The Pragmatic Programmer",
                Author = "Andrew Hunt",
                Description = "A guide to becoming a better and more practical programmer."
            },
            new Book
            {
                Id = 3,
                Title = "Atomic Habits",
                Author = "James Clear",
                Description = "A book about building good habits and breaking bad ones."
            }
                );
        }
        public DbSet<Book> Books { get; set; }
    }
}
