using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories {
	public interface IAtividadeRepo {
		Task<Atividade[]> PegaTodasAsync();
		Task<Atividade> PegaPorIdAsunc();
		Task<Atividade> PegaPorTituloAsync();
	}
}