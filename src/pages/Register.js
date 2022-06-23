import { useState } from "react";
import './css/Register.css'

function Register() {
  return (
    <div className="register-container">
      <h1>회원가입</h1>
      <div className="register">
        <table>
          <tr>
            <th>
              <span>아이디</span>
            </th>
            <td>
              <input type="text" className="c_id" name="id"></input>
            </td>
          </tr>
          <tr>
            <th>
              <span>비밀번호</span>
            </th>
            <td>
              <input type="password" className="c_password" onChange={()=>{passwordChk()}}></input>
            </td>
          </tr>
          <tr>
            <th>
              <span>비밀번호 확인</span>
            </th>
            <td>
              <input
                type="password"
                className="c_password"
                name="password"
                onChange={()=>{passwordChk()}}
              ></input><div id="chk"/>
            </td>
          </tr>
          <tr>
            <th>
              <span>이름</span>
            </th>
            <td>
              <input type="text" className="c_name" name="name"></input>
            </td>
          </tr>
          <tr>
            <th>
              <span>생년월일</span>
            </th>
            <td>
              <input type="date" className="id" name="id"></input>
            </td>
          </tr>
          <tr>
            <th>
              <span>휴대폰</span>
            </th>
            <td>
              <input type="text" className="c_phone" name="ph"></input>
            </td>
          </tr>
          <tr>
            <th>
              <span>직업</span>
            </th>
            <td>
              <input type="text" className="c_job" name="job"></input>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function passwordChk(){
    const icon = document.querySelector('#chk');
    const password = document.querySelectorAll('.c_password')
    console.log(password[0].value);
    if(password[0].value==password[1].value){
        icon.style.backgroundColor = "green";
    } else {
        icon.style.backgroundColor = "red"
    }
}

export default Register;
