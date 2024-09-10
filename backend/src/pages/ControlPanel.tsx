
import { useLocation } from 'react-router-dom';
import { BasedLayout } from "../shared/layouts";

export const ControlPanel = () => {
  const location = useLocation();
  const { operationID, dad } = location.state || {};

  // Lógica para buscar a operação e tabela no banco de dados pode ser adicionada aqui

  return (
    <BasedLayout title="Control Panel">
  
     

        {operationID ? (
          <h2>Operation ID: {operationID}</h2>
        ) : (
          <h2>Operation ID não disponível</h2>
        )}

        {dad ? (
          <>
            <h2>Dad: {dad}</h2>
            {/* Apresentar os cartões de todas as operações se o nome da operação for "Control Panel". */}
            {/* Se for outra operação, procurar no banco de dados pelas operações cujo "dad_id" seja igual ao "operationID" e apresentá-las. */}
          </>
        ) : (
          <h3>Dad não disponível</h3>
        )}
   
    </BasedLayout>
  );
};
