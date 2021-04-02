# String, Date
<br>

## 루시와 엘라 찾기
>문제: 동물 보호소에 들어온 동물 중 이름이 Lucy, Ella, Pickle, Rogan, Sabrina, Mitty인 동물의 아이디와 이름, 성별 및 중성화 여부를 조회하는 SQL 문을 작성해주세요.   
>![img](./img_01.jpg)  
>**SELECT** ANIMAL_ID, NAME, SEX_UPON_INTAKE **FROM** ANIMAL_INS **WHERE** NAME **IN**("Lucy", "Ella", "Pickle", "Rogan", "Sabrina", "Mitty") **ORDER BY** ANIMAL_ID **ASC**;  
>WHERE절을 이용하여 NAME이 IN(값)안에 포함되는 값을 찾도록 했다.  

<br> 

