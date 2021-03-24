# GROUP BY
<br>

## 모든 레코드 조회하기  
>문제: 동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요. 이때 고양이를 개보다 먼저 조회해주세요.  
>![img](./group_01.jpg)  
>**SELECT** ANIMAL_TYPE, **COUNT**(ANIMAL_ID) **AS** COUNT **FROM** ANIMAL_INS **GROUP BY** ANIMAL_TYPE **ORDER BY** ANIMAL_TYPE;    
>SELECT 조회할 정보 FROM 테이블명 ORDER BY(정렬방법) ANIMAL_ID(동물ID를 기준으로) ASC(오름차순)  
>각각 고유의 값인 ID의 개수를 조회하고 GROUP BY절을 이용하여 동물 타입으로 기준을 나누고 ORDER BY로 순서를 정했다. 

<br> 
