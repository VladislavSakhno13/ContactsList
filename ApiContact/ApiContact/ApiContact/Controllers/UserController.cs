using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using ApiContact.Models;
namespace ApiContact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        public string connect;
        public UserController(IConfiguration configuration)
        {
            connect = configuration.GetConnectionString("DefaultConection");
        }
        [HttpGet]
        public IActionResult GetAll(int UserId)
        {
            List<Users> users = new List<Users>();
            List<Contacts> contacts = new List<Contacts>();
     
            string sqlExpressionContact = $"SELECT * FROM [Contacts] WHERE UserId={UserId}";
            using (SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpressionContact, connection);
                var reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        contacts.Add(new Contacts { Id=reader.GetInt32(0), Name=reader.GetString(1),Phone=reader.GetString(2)});
                    }
                }
            }
            string sqlExpression = $"SELECT * FROM [Users] WHERE Id={UserId}";
            using (SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpression, connection);
                var reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        users.Add(new Users { Id = reader.GetInt32(0), Name = reader.GetString(1), Login = reader.GetString(2), Password = reader.GetString(3), ContactsList=contacts }); 
                    }
                    Console.WriteLine(contacts);
                    return Ok(users);
                }

            }
            return Ok("Users Not Found");
        }
        [HttpPost]
        public IActionResult Adduser(Users user)
        {
            string sqlExpression = $"INSERT INTO [Users] (Name,Login,Password) VALUES('{user.Name}','{user.Login}','{user.Password}')";
            using(SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpression);
                command.Connection=connection;
                command.ExecuteNonQuery();
            }

            return Ok(123);
        }
        [HttpDelete]
        public IActionResult DeleteById(int UserId)
        {
            string sqlExpression = $"DELETE FROM [Users] WHERE Id={UserId}";
            using (SqlConnection connection = new SqlConnection(connect))
            {
                connection.Open();
                var command = new SqlCommand(sqlExpression);
                command.Connection = connection;
                command.ExecuteNonQuery();
            }
            return Ok("Has Done");
        }
    }
}
