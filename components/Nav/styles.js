import styled from 'styled-components'

export const NavWrapper = styled.header`
  position: absolute;
  width: 100%;
  background-color: rgba(23, 30, 39, 1);
  box-shadow: 0 4px 8px 0 rgba(23, 30, 39, 0.5);
  height: 82px;

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    color: #c4c4c4;
    text-decoration: none;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.displayFont};
    overflow: hidden;
    white-space: nowrap;
  }

  .logo {
    margin: 0 10px;
  }

  .logo img {
    width: 50px;
  }
`
export const NavGap = styled.div`
  padding-top: 82px;
`

export const NavDesktopWrapper = styled.nav`
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  text-align: center;

  a:hover {
    color: #fff;
  }

  a::before {
    content: '';
    display: block;
    position: absolute;
    height: 4px;
    width: 60%;
    left: 20%;
    bottom: -4px;
    background-color: #008fcd;
    transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }

  a::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  a:hover::after {
    opacity: 0.15;
  }

  a:hover::before {
    bottom: 0px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavMobileWrapper = styled.nav`
  position: relative;

  .logo {
    margin: 0;
  }

  @media (min-width: 767px) {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
`

export const Drawer = styled.div`
  z-index: -1000;
  opacity: 0;
  position: absolute;
  background-color: rgba(23, 30, 39, 1);
  top: 5px;
  left: 10px;
  right: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(23, 30, 39, 0.5);
  transition: opacity 0.3s;

  &.active {
    display: block;
    opacity: 1;
    z-index: 1000;
  }

  a {
    color: #fff;
  }

  a::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  a:hover::after {
    opacity: 0.15;
  }
`

export const HamburgerButton = styled.div`
  position: relative;
  width: 82px;
  padding: 16px;
  cursor: pointer;
`

export const HamburgerOpen = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &,
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: #fff;
    border-radius: 1px;
  }

  &::before {
    left: 0;
    top: -9px;
  }

  &::after {
    left: 0;
    top: 9px;
  }
`
export const HamburgerClose = styled.div`
  font-size: 32px;
  width: 50px;
  height: 50px;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1001;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 0.15;
  }
`
