import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { authenticate } from "../atom";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  background: ${(props) => props.theme.black.darker};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 166px;
  height: 80px;
  fill: ${(props) => props.theme.red};
  cursor: pointer;
  path {
    stroke-width: 10px;
    stroke: ${(props) => props.theme.white.darker};
  }
  margin-bottom: 40px;
`;

const LonginBox = styled.div`
  /* border: 1px solid red; */
  background: ${(props) => props.theme.white.lighter};
  border-radius: 20px;
  padding: 60px 60px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 60px 60px;
    margin: 0 30px;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 30px 50px;
    margin: 0 30px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const DarkLogo = styled.img``;

const GuideBox = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GuideTitle = styled.span`
  /* border: 1px solid red; */
  font: bold 30px "pretendard";
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    font: bold 22px "pretendard";
    margin-bottom: 20px;
  }
`;

const GuideText = styled.p`
  /* border: 1px solid red; */
  font: bold 16px "pretendard";
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    font: bold 14px "pretendard";
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  /* border: 1px solid red; */
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 25px;
  position: relative;

  @media screen and (max-width: 450px) {
    font: bold 12px "pretendard";
    height: 40px;
    margin-bottom: 15px;
  }
`;

const LoginInput = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.white.darker};
  font-size: 18px;
  padding-top: 15px;
  padding-left: 20px;
  outline: none;
  &:focus {
    outline: none;
    border-bottom: 3px solid ${(props) => props.theme.aqua.aqua1};
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    opacity: 1;
    font-size: 12px;
    top: 23%;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    font: bold 12px "pretendard";
    height: 45px;
  }
`;

const Label = styled.label<{ $isEmpty: string }>`
  position: absolute;
  transform: translateY(-50%);
  padding-left: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.aqua.aqua1};
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  top: 50%;

  @media screen and (max-width: 450px) {
    font: bold 14px "pretendard";
  }
`;

const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 50px;
  font: bold 18px "pretendard";
  background: ${(props) => props.theme.aqua.aqua2};
  color: ${(props) => props.theme.white.lighter};
  cursor: pointer;
  margin-bottom: 50px;

  &:hover {
    background: ${(props) => props.theme.aqua.aqua4};
  }

  @media screen and (max-width: 768px) {
    height: 48px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
    font: bold 14px "pretendard";
    margin-bottom: 30px;
  }
`;

const CopyrightBox = styled.div`
  width: 436px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d4d4d4;
  padding-top: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 450px) {
    height: 40px;
    font: bold 14px "pretendard";
    margin-bottom: 40px;
  }
`;

const CopyrightTitle = styled.span`
  font: bold 15px "pretendard";
  color: #6a6a6a;
  padding-bottom: 7px;

  @media screen and (max-width: 450px) {
    font: bold 13px "pretendard";
  }
`;

const CopyrightText = styled.p`
  font: 12px "pretendard";
  color: #6a6a6a;
  span {
    color: ${(props) => props.theme.aqua.aqua1};
    cursor: pointer;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [next, setNext] = useState(false);

  const setAuthState = useSetRecoilState(authenticate);
  const navigation = useNavigate();

  const onEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!next) {
      // 첫 번째 단계: 이메일 입력
      if (email) {
        setNext(true);
      }
    } else {
      // 두 번째 단계: 비밀번호 입력 및 로그인 처리
      setAuthState({
        isAuthenticated: true,
        user: {
          email,
          password,
        },
      });
      navigation("/");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/img/logo.png" width="1024" height="276.742" />
        <LonginBox>
          <LogoBox>
            <DarkLogo src="/img/darklogo.png" width="119" height="38" />
          </LogoBox>
          <GuideBox>
            <GuideTitle>
              {next ? "비밀번호를 입력하세요" : "이메일을 입력하세요"}
            </GuideTitle>
            <GuideText>
              MyAurora 계정으로 오로라+에 로그인하세요.
              <br />
              {next ? "비밀번호를 입력해주세요." : "이메일을 입력해주세요."}
            </GuideText>
          </GuideBox>

          <Form onSubmit={onEmailSubmit}>
            {next ? (
              <InputBox>
                <LoginInput
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  required
                />
                <Label htmlFor="password" $isEmpty={password}>
                  비밀번호
                </Label>
              </InputBox>
            ) : (
              <InputBox>
                <LoginInput
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" "
                  required
                />
                <Label htmlFor="email" $isEmpty={email}>
                  이메일
                </Label>
              </InputBox>
            )}
            <Button type="submit">{next ? "로그인" : "다음"}</Button>
          </Form>
          <CopyrightBox>
            <CopyrightTitle>
              오로라+는 The Aurora Family of Companies의 계열사입니다.
            </CopyrightTitle>
            <CopyrightText>
              MyAurora 계정으로 Aurora+, ESPN, Aurora World,
              <span>기타 다른 서비스</span> 등 The Aurora Family of Companies의
              다양한 서비스에 간편하게 로그인해 보세요.
            </CopyrightText>
          </CopyrightBox>
        </LonginBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
