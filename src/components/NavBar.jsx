import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Wrapper from './Wrapper';

const NavBarStyled = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.greyLight};
  background-color: #ffffff;
  &.stick {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .nav-bar {
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
  }
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      li {
        margin: 0 0.7rem;
      }
    }
  }
`;

class NavBar extends Component {
  state = {
    stickNavBar: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset >= window.innerHeight && !this.state.stickNavBar) {
        this.setState({ stickNavBar: true });
      } else if (window.pageYOffset < window.innerHeight && this.state.stickNavBar) {
        this.setState({ stickNavBar: false });
      }
    });
  }

  render() {
    const { stickNavBar } = this.state;

    return (
      <NavBarStyled className={`${stickNavBar ? 'stick' : ''}`}>
        <Wrapper>
          <div className="nav-bar">
            <div>Krzysztof Furtak</div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Wrapper>
      </NavBarStyled>
    );
  }
}

export default NavBar;
