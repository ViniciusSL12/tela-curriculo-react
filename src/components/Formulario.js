import React from 'react';

function Formulario() {
  return (
    <div className="form-container">
      <form className="formulario">
        <div className="section">
          <h2>Dados pessoais</h2>
          <label>Nome:</label>
          <input type="text" name="nome" />

          <label>E-mail:</label>
          <input type="email" name="email" />

          <label>Telefone:</label>
          <input type="tel" name="telefone" />

          <label>Data de nascimento:</label>
          <input type="date" name="dataNascimento" />

          <label>CPF:</label>
          <input type="text" name="cpf" />
        </div>

        <div className="section">
          <h2>Formação Acadêmica e complementar</h2>
          <label>Nível de escolaridade:</label>
          <input type="text" name="escolaridade" />

          <label>Cursos complementares:</label>
          <input type="text" name="cursos" />

          <button type="button">+ Cursos</button>
        </div>

        <div className="section">
          <h2>Histórico profissional</h2>
          <label>Empresa:</label>
          <input type="text" name="empresa" />

          <label>Cargo:</label>
          <input type="text" name="cargo" />

          <label>Início:</label>
          <input type="date" name="inicio" />

          <label>Término:</label>
          <input type="date" name="termino" />

          <label>Descrição de função:</label>
          <textarea name="descricao" />

          <button type="button">+ Cargos</button>
        </div>

        <div className="section">
          <h2>Pessoas com Deficiências (PcD)</h2>
          <label>Você possui alguma deficiência?</label>
          <div>
            <input type="radio" name="pcd" value="sim" /> Sim
            <input type="radio" name="pcd" value="nao" /> Não
          </div>
        </div>

        <button type="submit">Criar currículo</button>
      </form>
    </div>
  );
}

export default Formulario;
