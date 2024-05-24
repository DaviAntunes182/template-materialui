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

//Declaração do componente CriarProduto, recebendo como props, do Componente ListarProduto, os states handClose, Produtos e setProdutos
const CriarProduto = ({handleClose, Produtos, setProdutos}) =>{
  const [idProduto, setIdProduto] = useState();
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [categoriaProduto, setCategoriaProduto] = useState('');
  
  useEffect(() => {
    //Abaixo uma variável é declarada para armazenar o id da Produto, somando 1 ao maior id existente atualmente no state Produtos
    let proximoId = Math.max(...Produtos.map(Produto => Produto.idProduto)) + 1;
    setIdProduto(proximoId);
  },[]);

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(`id: ${idProduto} \n nome: ${nomeProduto} \n descrição: ${descricaoProduto} \n preco: ${precoProduto} \n categoria: ${categoriaProduto}`);

    setProdutos(
      [...Produtos, 
        {
          idProduto,
          nomeProduto,
          descricaoProduto,
          precoProduto,
          categoriaProduto
        }
      ]);
    //console.log(`Produtos: ` + JSON.stringify(Produtos));
    handleClose();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Produtos"
          subheader="Cadastro de Produtos"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="Produto_nome" aria-describedby="Produto_nome_helper_text" value={nomeProduto} onChange={e => { setNomeProduto(e.target.value) }} />
              <FormHelperText id="Produto_nome_helper_text">Título do Produto.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="Produto_descricao" aria-describedby="Produto_descricao_helper_text" value={descricaoProduto} onChange={e => { setDescricaoProduto(e.target.value) }} />
              <FormHelperText id="Produto_descricao_helper_text">Descrição do Produto.</FormHelperText>
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
              <Grid item xs={2}>
                <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>  
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

export default CriarProduto;