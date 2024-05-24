import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

import CriarProduto from './CriarProduto';
import EditarProduto from './EditarProduto';

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de Produtos.
function createData(
  idProduto: number,
  nomeProduto: string,
  descricaoProduto: string,
  precoProduto: string,
  categoriaProduto: string
) {
  return { idProduto, nomeProduto, descricaoProduto, precoProduto, categoriaProduto };
}

//Definição do array contendo os dados iniciais da listagem de Produtos
const initialRows = [
  createData(1, 'Samsung S24 Ultra', 'Smartphone Samsung', '4299,99', 'Smartphones Samsung'),
  createData(2, 'iPhone 14 Pro', 'Smartphone Apple', '6999,99', 'Smartphones Apple'),
  createData(3, 'Playstation 5', 'Console Sony', '4999,99', 'Videogames'),
  createData(4, 'RTX 4090', 'Placa de Video NVidia', '12499,89', 'Placas de Video'),
  createData(5, 'Monitor Samsung 24', 'Monitor 24 polegadas', '899,00', 'Monitores'),
  createData(6, 'TV LG 50', 'Televisão 50 polegadas', '1799,90', 'Televisores',),
];

//Componente ListarProduto
const ListarProduto = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [Produtos, setProdutos] = useState([]);
  const [Produto, setProduto] = useState();
  const [idProdutoSelecionada, setIdProdutoSelecionada] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //O array definido acima é setado como conteúdo do state Produtos na renderização inicial do componente.
  useEffect(() => {
    setProdutos(initialRows);
  },[]);

  const handleEditar = (id) => {
    setIdProdutoSelecionada(id);

    //Objeto local para armazenamento da Produto filtrada de acordo com a seleção do usuário
    let ProdutoParaEditar = Produtos.filter(obj => {
      return obj.idProduto === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Produto
    setProduto(ProdutoParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Produto
    setOpenEditar(true)
  };

  const handleDeletar = (id) => {
    setProdutos(current =>
      current.filter(Produto => {
        return Produto.idProduto !== id;
      }),
    );
  };

    return(
    <>
    <Card>
        <CardHeader
          title="Produtos"
        /> 
        <CardContent>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Categoria</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {Produtos.map((row, indice) => (
                    <TableRow
                    key={indice}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                          {row.idProduto}
                      </TableCell>
                      <TableCell component="th" scope="row">
                          {row.nomeProduto}
                      </TableCell>
                      <TableCell align="right">{row.descricaoProduto}</TableCell>
                      <TableCell align="right">{row.precoProduto}</TableCell>
                      <TableCell align="right">{row.categoriaProduto}</TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="success" onClick={() => handleEditar(row.idProduto)}><EditIcon fontSize="small" /></Button>            
                      </TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="error" onClick={() => handleDeletar(row.idProduto)}><DeleteIcon fontSize="small" /></Button>            
                      </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" onClick={handleOpen}>Criar Produto</Button>
            <Button size="small" variant="outlined">Cancelar</Button>
      </CardActions> 
    </Card>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <CriarProduto handleClose={handleClose} Produtos={Produtos} setProdutos={setProdutos} />
        </div>
      </Modal>  
    </div>
    <div>
      <Modal
        open={openEditar}
        onClose={handleCloseEditar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <EditarProduto handleCloseEditar={handleCloseEditar} idProdutoSelecionada={idProdutoSelecionada} Produtos={Produtos} Produto={Produto} setProdutos={setProdutos} />
        </div>
      </Modal>  
    </div>
  </>    
 );
};
 
export default ListarProduto;