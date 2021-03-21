<<<<<<< HEAD:SQL/1.SELECT/README.md
## SELECT를 이용한 레코드 조회
![img](./img_01.jpg)  
<br>
>**SELECT** ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE   
>**FROM** ANIMAL_INS **ORDER BY** ANIMAL_ID **ASC**
>SELECT 조회할 정보 FROM 테이블명 ORDER BY(정렬방법) ANIMAL_ID(동물ID를 기준으로) ASC(오름차순)  
>조회할 정보를 조회할 테이블에서 ID를 기준으로 오름차순 정렬  
=======
# SELECT를 이용한 레코드 조회  
<br>

## 모든 레코드 조회하기  
![img](./select_01.jpg)  
>**SELECT** ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE   
>**FROM** ANIMAL_INS **ORDER BY** ANIMAL_ID **ASC**;  
>SELECT 조회할 정보 FROM 테이블명 ORDER BY(정렬방법) ANIMAL_ID(동물ID를 기준으로) ASC(오름차순)  
>조회할 정보를 조회할 테이블에서 ID를 기준으로 오름차순 정렬  

<br> 

## 역순 정렬하기  
![img](./select_02.jpg)  
>**SELECT** NAME, DATETIME **FROM** ANIMAL_INS **ORDER BY** ANIMAL_ID **DESC**;  
>역순으로 정렬하는 것을 요구하였기에 DESC(내림차순)를 이용했다.  
>>>>>>> de7e34e81f5f78df29dd04efeb8985ca8deb9c71:SQL/모든 레코드 조회하기(SELECT)/README.md
