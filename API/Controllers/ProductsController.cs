using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using V2GELENZAMLARV2.Data;

namespace V2GELENZAMLARV2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        public ProductsController(DataContext context)
        {
            _context = context;
        }


   [HttpGet]
        public Object Get()
        {
          
             Object temp =(from all in _context.Urunlerim.OrderBy(x => x.UrunID) select all).ToList();
                 
            return temp;
        }
    }
}

 