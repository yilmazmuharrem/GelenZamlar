using Microsoft.EntityFrameworkCore;

namespace V2GELENZAMLARV2.Data
{
    public class DataContext :DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }


        public DbSet<Products> Urunlerim { get; set; }



    }
}
