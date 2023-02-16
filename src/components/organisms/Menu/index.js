import React from 'react';
import SideMenu from '../SideMenu';
import * as S from './styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Menu = () => {
  return (
    <S.Container id='home'>
      <div>
        <S.Title>Global Tech</S.Title>
      </div>
      <S.Side>
        <SideMenu />
      </S.Side>
      <div>
        <S.Menu>
          <AnchorLink href='#home'>
            <S.Lista>Planos</S.Lista>
          </AnchorLink>
          <AnchorLink href='#servico'>
            <S.Lista>Serviços</S.Lista>
          </AnchorLink>
          <AnchorLink href='#promocoes'>
            <S.Lista>Promoções</S.Lista>
          </AnchorLink>
          <AnchorLink href='#contato'>
            <S.Lista>Contato</S.Lista>
          </AnchorLink>
        </S.Menu>
      </div>
    </S.Container>
  );
};

export default Menu;
