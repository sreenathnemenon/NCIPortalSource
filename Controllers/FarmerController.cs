using Microsoft.AspNetCore.Mvc;
using NCIPortalDataAccess;
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
        // GET: api/<FarmerController>
        [HttpGet("GetFarmersList")]
        public async Task<IActionResult> GetFarmersList()
        {
            FarmerService fService = new FarmerService();
            List<FarmerModel> fList= await fService.getFarmersList();
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
