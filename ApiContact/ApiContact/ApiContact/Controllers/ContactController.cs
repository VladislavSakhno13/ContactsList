using ApiContact.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace ApiContact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : Controller
    {
        public string connect;
        public ContactController(IConfiguration configuration)
        {
            connect = configuration.GetConnectionString("DefaultConection");
        }
        [HttpGet]
        public IActionResult GetAll(int UserId)
        {
            List<Contacts> contacts = new List<Contacts>();
            string sqlExpression = $"SELECT * FROM [Contacts] WHERE UserId={UserId}";
            using (SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpression, connection);
                var reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        contacts.Add(new Contacts { Id = reader.GetInt32(0), Name = reader.GetString(1), Phone = reader.GetString(2) });
                    }
                    return Ok(contacts
                        );
                }

            }
            return Ok("Users Not Found");
        }
        [HttpPost]
        public IActionResult PostContact(int UserId, Contacts contacts)
        {
            string sqlExpression = $"INSERT INTO [Contacts] (ContactName,ContactPhone,UserId) VALUES('{contacts.Name}','{contacts.Phone}','{UserId}')";
            using (SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpression);
                command.Connection = connection;
                command.ExecuteNonQuery();
            }

            return Ok(123);
        }
        [HttpDelete]
        public IActionResult DeleteById(int ContactId)
        {
            return Ok(123);
        }

    }
}
