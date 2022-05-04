using System.Text.Json.Serialization;

namespace ApiContact.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Login { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        
        public List<Contacts>? ContactsList { get; set; }
    }
}
