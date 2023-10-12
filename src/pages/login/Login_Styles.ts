import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Login = styled.section`
  background: ${theme.colors.primary};
`

const FormWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.font};
  border-radius: 6%;
  padding: 20px;
  margin: 30px;
`

const TitleLog = styled.h2`
  font-weight: 400;
`

const Legend = styled.legend`
  color: ${theme.colors.primary};
  font-weight: 500;
  margin: 10px;
  font-size: 20px;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 22px;

  .MuiInputBase-root, .MuiOutlinedInput-root, .MuiInputBase-colorPrimary, .MuiInputBase-formControl, .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 280px;
  }
`

const Memo = styled.span`
  color: ${theme.colors.primary};
  display: inline-block;
  text-align: left;
`

const WhiteLogo = styled.img`
  width: 45px;
  height: 45px;
`

const buttonStyle = {
    width: '125px',
    margin: '0 auto',
    color: `${theme.colors.primary}`,
    fontWeight: 500,
    borderColor: `${theme.colors.primary}`
}

export const S = {
    Login,
    FormWrapper,
    TitleLog,
    Legend,
    Form,
    Memo,
    WhiteLogo,
    buttonStyle
}