import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

//Declaração do componente EditarProduto, recebendo como props, do Componente ListarProduto, os states handCloseEditar,
// idProdutoSelecionada, Produtos, Produto e setProdutos
const EditarProduto = ({handleCloseEditar, idProdutoSelecionada, Produtos, Produto, setProdutos}) =>{
  const [idProduto, setIdProduto] = useState();
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [categoriaProduto, setCategoriaProduto] = useState('');

  //Abaixo setamos os valores dos states (que popularão o formulário mais abaixo) com os valores do state Produto,
  //  recebido como props do componente ListarProduto.
  useEffect(() => {
    //console.log('Produto selecionada: ' + JSON.stringify(Produto));
    setIdProduto(idProdutoSelecionada);
    setNomeProduto(Produto.nomeProduto);
    setDescricaoProduto(Produto.descricaoProduto);
    setPrecoProduto(Produto.precoProduto);
    setCategoriaProduto(Produto.categoriaProduto);
  },[]);

  const handleEditar = () => {
    //console.log(`id: ${idProduto} \n nome: ${nomeProduto} \n descrição: ${descricaoProduto} \n preco: ${precoProduto} \n categoria: ${categoriaProduto} \n apagar: ${apagarProduto} \n apagar: ${apagarProduto}`);
    //console.log('idProdutoSelecionada: ' + idProdutoSelecionada);
    setProdutos(current =>
      current.map(obj => {
        if (obj.idProduto === idProdutoSelecionada) {
          console.log('obj: ' + JSON.stringify(obj));          
          return {...obj, 
              idProduto:idProdutoSelecionada,
              nomeProduto:nomeProduto,
              descricaoProduto:descricaoProduto,
              precoProduto:precoProduto,
              categoriaProduto:categoriaProduto
          };
        }

        return obj;
      }),
    );

    //console.log(`Produtos Editadas: ` + JSON.stringify(Produtos));
    handleCloseEditar();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Produtos"
          subheader="Edição de Produtos"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="Produto_nome" aria-describedby="Produto_nome_helper_text" value={nomeProduto} onChange={e => { setNomeProduto(e.target.value) }} />
              <FormHelperText id="Produto_nome_helper_text">Título da Produto.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="Produto_descricao" aria-describedby="Produto_descricao_helper_text" value={descricaoProduto} onChange={e => { setDescricaoProduto(e.target.value) }} />
              <FormHelperText id="Produto_descricao_helper_text">Descrição da Produto.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="Produto_preco" aria-describedby="Produto_preco_helper_text" value={precoProduto} onChange={e => { setPrecoProduto(e.target.value) }} />
              <FormHelperText id="Produto_preco_helper_text">Preço do Produto.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="Produto_categoria" aria-describedby="Produto_categoria_helper_text" value={descricaoProduto} onChange={e => { setCategoriaProduto(e.target.value) }} />
              <FormHelperText id="Produto_categoria_helper_text">Categoria do Produto.</FormHelperText>
            </FormControl>
          </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleEditar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleCloseEditar}>Cancelar</Button>  
              </Grid>
            </Grid>  
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default EditarProduto;