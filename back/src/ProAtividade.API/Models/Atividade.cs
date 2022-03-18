using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models {
	public class Atividade {
		#region Properties
		public int Id { get; set; }
		public string Titulo { get; set; }
		public string Descricao { get; set; }
		public Prioridade Prioridade { get; set; }
		#endregion

		#region Constructors
		public Atividade() {

		}

		public Atividade(int id) {
			this.Id = id;
		}
		#endregion
	}
}