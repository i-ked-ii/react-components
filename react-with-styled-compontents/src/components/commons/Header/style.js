import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: absolute;
  width: 100%;
  z-index: 9999;
  background: transparent;
  .logo_inner_page {
    display: none;
  }
  .menu_nav {
    width: 100%;
    margin-left: 140px;
    @media (max-width: 991px) {
      margin-left: 0px;
    }
  }
  .navbar {
    background: transparent;
    padding: 0px;
    border: 0px;
    border-radius: 0px;
    width: 100%;
    .nav {
      .nav-item {
        margin-right: 40px;
        .nav-link {
          font-style: normal;
          font-variant-ligatures: normal;
          font-variant-caps: normal;
          font-variant-numeric: normal;
          font-variant-east-asian: normal;
          font-weight: 500;
          font-stretch: normal;
          font-size: 12px;
          line-height: 100px;
          font-family: Roboto, sans-serif;
          text-transform: uppercase;
          color: #05364d;
          padding: 0px;
          font-size: 12px;
          display: inline-block;
          &:after {
            display: none;
          }
        }
        &:hover,
        &.active {
          .nav-link {
            color: #efb6df;
          }
        }
      }
    }
  }
  .navbar-brand {
    margin-right: 0px;
  }
  &.navbar_fixed {
    .main_menu {
      position: fixed;
      width: 100%;
      top: -70px;
      left: 0;
      right: 0;
      background: #ffffff;
      transform: translateY(70px);
      transition: transform 500ms ease, background 500ms ease;
      box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
      .navbar {
        .nav {
          .nav-item {
            .nav-link {
              line-height: 70px;
            }
          }
        }
      }
    }
  }
  &.header_inner_page {
    .navbar-brand {
      display: none;
    }

    .logo_inner_page {
      display: block;
    }
  }
  &.header_inner_page {
    .navbar {
      .nav {
        .nav-item {
          .nav-link {
            color: #fff;
          }
          &.active {
            .nav-link {
              color: #efb6df;
            }
          }
        }
      }
    }

    &.navbar_fixed .main_menu {
      background: #8034c3;
    }

    .navbar {
      @media (max-width: 991px) {
        background: #8034c3;
      }
    }
  }
`;
