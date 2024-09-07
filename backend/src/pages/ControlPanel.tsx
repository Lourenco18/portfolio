import { Menu } from "../components/Menu/Menu";
import { useLocation } from 'react-router-dom';
export const ControlPanel = () => {
  const location = useLocation();
  const { operationID, dad } = location.state || {};
  //ir a base de dados encontrar a operação com o id operationID e a tabela correspondente caso for tabela
  return (
    <>
      <Menu>
        <p style={{ textAlign: "left", marginLeft: "16px" }}>ControlPanel</p>
        {operationID ? (
        <p>Operation ID: {operationID}</p>
      ) : (
        <p>Operation ID não disponível</p>
        
      )}
         {dad ? (
        <p>Dad: {dad}</p>
        //apresentar os cartões de todas as outras operações se o nome da operação for Control Panel
        //caso seja outra qualquer é preciso procurar em todas as operações no campo dad_id se é igual ao id da operação atual e apresentálas 
        
      ) : (
        <p>Dad não disponível</p>
        
      )}
      
      </Menu>
    </>
  );
};