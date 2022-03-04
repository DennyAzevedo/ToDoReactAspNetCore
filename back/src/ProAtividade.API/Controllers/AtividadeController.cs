using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AtividadeController : ControllerBase
  {
    [HttpGet]
    public Atividade Get()
    {
      return new Atividade();
    }

    [HttpGet("{id}")]
    public string Get(int id)
    {
      return $"Meu primeiro método Get com parametro {id}";
    }

    [HttpPost]
    public Atividade Post(Atividade atividade)
    {
      atividade.Id = 1;
      return atividade;
    }

    [HttpPut("{id}")]
    public Atividade Put(int id, Atividade atividade)
    {
      atividade.Id += 1;
      return atividade;
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
      return "Meu primeiro método Delete";
    }
  }
}