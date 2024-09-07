import { Menu } from "../components/Menu/Menu";
import { useLocation } from 'react-router-dom';
export const ListPage = () => {
  const location = useLocation();
  const { operationID, dad } = location.state || {};
  //ir a base de dados encontrar a operação com o id operationID e a tabela correspondente caso for tabela
  return (
    <>
      <Menu>
        <p style={{ textAlign: "left", marginLeft: "16px" }}>ListPage</p>
        {operationID ? (
        <p>Operation ID: {operationID}</p>
      ) : (
        <p>Operation ID não disponível</p>
        
      )}
         {dad ? (
        <p>Dad: {dad}</p>
      ) : (
        <p>Dad não disponível</p>
        
      )}
      
      </Menu>
    </>
  );
};