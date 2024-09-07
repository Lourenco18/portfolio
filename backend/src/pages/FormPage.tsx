import { Menu } from "../components/Menu/Menu";
import { useLocation } from 'react-router-dom';
export const FormPage = () => {
  const location = useLocation();
  const { operationID } = location.state || {};
  //com o id operationID tenho de saber qual a tabela correspondente e o id do dado da tabela
  //tendo a tabela  e o id do dado da tabela posso ir buscar os dados a base de dados e apresentalos caso seja EDITAR e apresentar o btão de editar
  //caso seja ADICIONAR é so apresentar os campos de preenchimento que vão estar guardados num ficheiro e apresentar o butão de adicionar
  return (
    <>
      <Menu>
        <p style={{ textAlign: "left", marginLeft: "16px" }}>FormPage</p>
        {operationID ? (
        <p>Operation ID: {operationID}</p>
      ) : (
        <p>Operation ID não disponível</p>
      )}
      </Menu>
    </>
  );
};