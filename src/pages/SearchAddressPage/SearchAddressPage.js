import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {MainContainer, Input, SearchButton, ContentContainer, ResultContainer, ErrorMessage} from './style'

export const SearchAddressPage = () => {

  const {register, handleSubmit} = useForm();
  const [showError, setShowError] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [information, setInformation] = useState({
    cep: '',
    endereco: '',
    complemento: '',
    bairro: '',
    localidade: '',
    siafi: '',
    ddd: '',
    gia: '',
    ibge: ''
  })
  

  const onSubmit = (e) => {
    //console.log(e);
  }

  const checkCEP = (e) => {
    showError && setShowError(false)
    showAddress && setShowAddress(false)
    const cep = e.target.value.replace(/\D/g, '');
    //console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      setInformation(data)
      //console.log(data);
      setShowAddress(true);
    })
    .catch(err => {
      setShowAddress(false)
      //console.log(err)
      setShowError(true)
    });
  }



  return (
    <MainContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentContainer>
            <Input type="text" {...register("cep")} onBlur={checkCEP} placeholder="Digite o CEP"/>
            <div showError={showError} >
              {showError ? 
              <ErrorMessage> 
                <p>Digite um CEP válido</p> 
              </ErrorMessage> :  null }
            </div>
            <SearchButton type="submit" >Buscar</SearchButton>

            <div showAddress={showAddress}>
              {showAddress ? 
              <ResultContainer>
                <p><span><b>CEP: </b></span>{information.cep}</p>
                <p><span><b>Logradouro: </b></span>{information.logradouro}</p>
                <p><span><b>Complemento: </b></span>{information.complemento}</p>
                <p><span><b>Bairro: </b></span>{information.bairro}</p>
                <p><span><b>Localidade: </b></span>{information.localidade}</p>
                <p><span><b>Siafi: </b></span> {information.siafi}</p>
                <p><span><b>DDD: </b></span>{information.ddd}</p>
                <p><span><b>GIA: </b></span>{information.gia}</p>
                <p><span><b>IBGE: </b></span>{information.ibge}</p>
              </ResultContainer> : null }
            </div>

          </ContentContainer>
        </form>
    </MainContainer>
  );
}
