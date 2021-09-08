using Microsoft.AspNetCore.Mvc;
using NCIPortalDataAccess;
using NCIPortalDataAccess.DBContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NCIPortal.Controllers
{
    [Route("nciapi/[controller]")]
    [ApiController]
    public class FarmerController : ControllerBase
    {
        private NCIDBContext nciDbContext;
        FarmerService fService = null;
        public FarmerController(NCIDBContext context)
        {
            nciDbContext = context;
            fService = new FarmerService(nciDbContext);
        }
        // GET: api/<FarmerController>
        [HttpGet("GetFarmersList")]
        public IActionResult GetFarmersList()
        { 
            List<FarmerModel> fList=  fService.getFarmerList();
            return Ok(fList);
        }

        // GET api/<FarmerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FarmerController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FarmerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FarmerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
